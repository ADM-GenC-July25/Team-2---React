import menuData from "./assets/menuData";
import MenuItemGrid from "./components/MenuItemListingGrid";
import { useState } from "react";
 
function MenuPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [spiceLevel, setSpiceLevel] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
 
  const DEFAULT_SEARCH_BAR_VALUE = "search menu items...";
 
  // Get unique categories from menuData
  const categories = ["all", ...menuData.map(cat => cat.category.toLowerCase())];
  
  // Common allergens for space food
  const allergenOptions = [
    "gluten", "dairy", "nuts", "shellfish", "soy", "eggs", 
    "plasma-sensitive", "meteor-dust", "alien-protein", "synthetic-compounds"
  ];
 
  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }
 
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
 
  function handleAllergenChange(allergen) {
    setSelectedAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  }
 
  function handlePriceRangeChange(event) {
    setPriceRange(event.target.value);
  }
 
  function handleSpiceLevelChange(event) {
    setSpiceLevel(event.target.value);
  }
 
  function clearAllFilters() {
    setSearchText("");
    setSelectedCategory("all");
    setSelectedAllergens([]);
    setPriceRange("all");
    setSpiceLevel("all");
  }
 
  // Apply filters to menuData
  const getFilteredMenuData = () => {
    return menuData.map(category => {
      // Filter by category
      if (selectedCategory !== "all" && category.category.toLowerCase() !== selectedCategory) {
        return { ...category, items: [] };
      }
 
      // Filter items within category
      const filteredItems = category.items.filter(item => {
        // Search text filter
        const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchText.toLowerCase());
        
        // Allergen filter (assuming items have allergens property)
        const matchesAllergens = selectedAllergens.length === 0 || 
                               !selectedAllergens.some(allergen => 
                                 item.allergens && item.allergens.includes(allergen)
                               );
 
        // Price range filter (extract number from price string)
        let matchesPrice = true;
        if (priceRange !== "all") {
          const itemPrice = parseInt(item.price.replace(/[^\d]/g, ''));
          switch(priceRange) {
            case "under-200":
              matchesPrice = itemPrice < 200;
              break;
            case "200-400":
              matchesPrice = itemPrice >= 200 && itemPrice <= 400;
              break;
            case "over-400":
              matchesPrice = itemPrice > 400;
              break;
          }
        }
 
        // Spice level filter (assuming items have spiceLevel property)
        const matchesSpice = spiceLevel === "all" || 
                           (item.spiceLevel && item.spiceLevel === spiceLevel);
 
        return matchesSearch && matchesAllergens && matchesPrice && matchesSpice;
      });
 
      return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);
  };
 
  const filteredMenuData = getFilteredMenuData();
  const totalItems = filteredMenuData.reduce((sum, cat) => sum + cat.items.length, 0);
 
  return (
    <div style={{ 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 50%, #16213e 100%)",
      padding: "20px"
    }}>
      {/* Search Bar */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
        paddingTop: "20px"
      }}>
        <div style={{ position: "relative", width: "400px" }}>
          <input
            onChange={handleSearchTextChange}
            value={searchText}
            placeholder={DEFAULT_SEARCH_BAR_VALUE}
            style={{
              padding: "12px 50px 12px 20px",
              fontSize: "16px",
              border: "2px solid #4ecdc4",
              borderRadius: "25px",
              width: "100%",
              background: "rgba(255, 255, 255, 0.9)",
              outline: "none",
              boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)"
            }}
          />
          <span style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "18px"
          }}>🔍</span>
        </div>
      </div>
 
      {/* Filter Toggle Button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            background: "linear-gradient(45deg, #667eea, #764ba2)",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s ease"
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          🛸 {showFilters ? "Hide" : "Show"} Filters ({totalItems} items)
        </button>
      </div>
 
      {/* Filters Panel */}
      {showFilters && (
        <div style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(78, 205, 196, 0.3)",
          borderRadius: "20px",
          padding: "25px",
          margin: "0 auto 30px",
          maxWidth: "800px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "20px"
          }}>
            
            {/* Category Filter */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                color: "#4ecdc4", 
                fontWeight: "bold",
                fontSize: "14px"
              }}>
                🍽️ FOOD CATEGORY
              </label>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #4ecdc4",
                  background: "rgba(255, 255, 255, 0.9)",
                  fontSize: "14px",
                  outline: "none"
                }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
 
            {/* Price Range Filter */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                color: "#4ecdc4", 
                fontWeight: "bold",
                fontSize: "14px"
              }}>
                💰 PRICE RANGE (Credits)
              </label>
              <select
                value={priceRange}
                onChange={handlePriceRangeChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #4ecdc4",
                  background: "rgba(255, 255, 255, 0.9)",
                  fontSize: "14px",
                  outline: "none"
                }}
              >
                <option value="all">All Prices</option>
                <option value="under-200">Under 200 Credits</option>
                <option value="200-400">200-400 Credits</option>
                <option value="over-400">Over 400 Credits</option>
              </select>
            </div>
 
            {/* Spice Level Filter */}
            <div>
              <label style={{ 
                display: "block", 
                marginBottom: "8px", 
                color: "#4ecdc4", 
                fontWeight: "bold",
                fontSize: "14px"
              }}>
                🌶️ SPICE LEVEL
              </label>
              <select
                value={spiceLevel}
                onChange={handleSpiceLevelChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #4ecdc4",
                  background: "rgba(255, 255, 255, 0.9)",
                  fontSize: "14px",
                  outline: "none"
                }}
              >
                <option value="all">All Spice Levels</option>
                <option value="mild">Mild</option>
                <option value="medium">Medium</option>
                <option value="hot">Hot</option>
                <option value="solar-flare">Solar Flare</option>
              </select>
            </div>
          </div>
 
          {/* Allergen Filter */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ 
              display: "block", 
              marginBottom: "12px", 
              color: "#4ecdc4", 
              fontWeight: "bold",
              fontSize: "14px"
            }}>
              ⚠️ EXCLUDE ALLERGENS
            </label>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px"
            }}>
              {allergenOptions.map(allergen => (
                <label 
                  key={allergen} 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    color: "#b8b8d1",
                    fontSize: "13px",
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedAllergens.includes(allergen)}
                    onChange={() => handleAllergenChange(allergen)}
                    style={{ marginRight: "8px", cursor: "pointer" }}
                  />
                  {allergen.charAt(0).toUpperCase() + allergen.slice(1).replace('-', ' ')}
                </label>
              ))}
            </div>
          </div>
 
          {/* Clear Filters Button */}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={clearAllFilters}
              style={{
                background: "linear-gradient(45deg, #ff6b6b, #f5576c)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "15px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)"
              }}
            >
              🧹 Clear All Filters
            </button>
          </div>
        </div>
      )}
 
      {/* Results */}
      {totalItems === 0 ? (
        <div style={{
          textAlign: "center",
          color: "#b8b8d1",
          fontSize: "18px",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
          margin: "0 auto",
          maxWidth: "400px"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>🛸</div>
          <p>No cosmic delicacies match your criteria.</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Try adjusting your filters or search terms!
          </p>
        </div>
      ) : (
        <MenuItemGrid menuData={filteredMenuData} searchTerm="" />
      )}
    </div>
  );
}
 
export default MenuPage;