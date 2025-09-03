import { useState } from "react";
import MenuItemListingGrid from "./components/MenuItemListingGrid";
import menuData from "./assets/menuData";
import { allergenOptions, spiceLevels } from "./assets/menuData";

function MenuPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [priceRange, setPriceRange] = useState("all");
  const [spiceLevel, setSpiceLevel] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const DEFAULT_SEARCH_BAR_VALUE = "search menu items...";

  const categories = [
    "all",
    ...new Set(menuData.map((item) => item.category.toLowerCase())),
  ];

  // Common allergens for space food

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleAllergenChange(allergen) {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
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

  const getFilteredMenuData = () => {
    return menuData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase());

      const matchesAllergens =
        selectedAllergens.length === 0 ||
        !selectedAllergens.some(
          (allergen) => item.allergens && item.allergens.includes(allergen)
        );

      let matchesPrice = true;
      if (priceRange !== "all") {
        const itemPrice = item.price;
        switch (priceRange) {
          case "under-5":
            matchesPrice = itemPrice < 5;
            break;
          case "5-10":
            matchesPrice = itemPrice >= 5 && itemPrice <= 10;
            break;
          case "over-10":
            matchesPrice = itemPrice > 10;
            break;
        }
      }

      const matchesSpice =
        spiceLevel === "all" ||
        (item.spiceLevel && item.spiceLevel === spiceLevel);

      const isAvailable =
      item.availability === 1;

      const matchesCategory =
        selectedCategory === "all" ||
        item.category.toLowerCase() === selectedCategory;

      return (
        matchesSearch &&
        matchesAllergens &&
        matchesPrice &&
        matchesSpice &&
        matchesCategory &&
        isAvailable
      );
    });
  };

  const filteredMenuData = getFilteredMenuData(); // flat array of items
  const totalItems = filteredMenuData.length; // safe to call .length

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 50%, #16213e 100%)",
        padding: "20px",
      }}
    >
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          paddingTop: "20px",
        }}
      >
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
              boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "18px",
            }}
          >
            🔍
          </span>
        </div>
      </div>

      {/* Filter Toggle Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
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
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          🛸 {showFilters ? "Hide" : "Show"} Filters ({totalItems} items)
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(78, 205, 196, 0.3)",
            borderRadius: "20px",
            padding: "25px",
            margin: "0 auto 30px",
            maxWidth: "800px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Category Filter */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#4ecdc4",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
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
                  outline: "none",
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all"
                      ? "All Categories"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#4ecdc4",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
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
                  outline: "none",
                }}
              >
                <option value="all">All Prices</option>
                <option value="under-5">Under 5</option>
                <option value="5-10">5 - 10</option>
                <option value="over-10">Over 10</option>
              </select>
            </div>

            {/* Spice Level Filter */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#4ecdc4",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
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
                  outline: "none",
                }}
              >
                <option value="all">All Spice Levels</option>
                <option value={spiceLevels[0]}>Mild</option>
                <option value={spiceLevels[1]}>Medium</option>
                <option value={spiceLevels[2]}>Hot</option>
                <option value={spiceLevels[3]}>Solar Flare</option>
              </select>
            </div>
          </div>

          {/* Allergen Filter */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                color: "#4ecdc4",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ⚠️ EXCLUDE ALLERGENS
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              {allergenOptions.map((allergen) => (
                <label
                  key={allergen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#b8b8d1",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedAllergens.includes(allergen)}
                    onChange={() => handleAllergenChange(allergen)}
                    style={{ marginRight: "8px", cursor: "pointer" }}
                  />
                  {allergen.charAt(0).toUpperCase() +
                    allergen.slice(1).replace("-", " ")}
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
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              🧹 Clear All Filters
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {totalItems === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#b8b8d1",
            fontSize: "18px",
            padding: "40px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "15px",
            margin: "0 auto",
            maxWidth: "400px",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>🛸</div>
          <p>No cosmic delicacies match your criteria.</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Try adjusting your filters or search terms!
          </p>
        </div>
      ) : (
        <MenuItemListingGrid menuData={filteredMenuData} searchTerm="" />
      )}
    </div>
  );
}

export default MenuPage;
