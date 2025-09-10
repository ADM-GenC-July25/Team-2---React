import { useState, useEffect } from "react";
import MenuItemListingGrid from "./components/MenuItemListingGrid";
import { MenuRepository } from "./MenuRepository";

function MenuPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState([]);
  const [spiceLevels, setSpiceLevels] = useState([]);
  const [allergens, setAllergens] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  const DEFAULT_SEARCH_BAR_VALUE = "search menu items...";

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [all, options] = await Promise.all([
          MenuRepository.fetchAllMenuItems(),
          MenuRepository.fetchMenuOptions(),
        ]);
        setMenuItems(all);
        setCategories(["all", ...options.categories]);
        setSpiceLevels(["all", ...options.spiceLevels]);
        setAllergens(options.allergens);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  function GetItemScreen(totalItems) {
    if (loading) {
      return (
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
          <p>Loading menu...</p>
        </div>
      );
    } else if (error !== null) {
      return (
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
          <p>An error has occured in loading the menu!!!</p>
        </div>
      );
    } else if (totalItems === 0) {
      return (
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
      );
    } else {
      return <MenuItemListingGrid menuData={filteredMenuItems} searchTerm="" />;
    }
  }

  async function fetchFilteredItems(
    effectivePrice,
    effectiveCategory,
    effectiveSpice,
    effectiveAllergens
  ) {
    let minPrice = "";
    let maxPrice = "";

    if (effectivePrice === "under-5") {
      minPrice = "0";
      maxPrice = "5";
    }
    if (effectivePrice === "5-10") {
      minPrice = "5";
      maxPrice = "10";
    }
    if (effectivePrice === "over-10") {
      minPrice = "10";
    }

    let categoryQuery = effectiveCategory === "all" ? "" : effectiveCategory;
    let spiceQuery = effectiveSpice === "all" ? "" : effectiveSpice;

    try {
      setLoading(true);
      const menu = await MenuRepository.fetchFilteredMenuItems(
        categoryQuery,
        spiceQuery,
        minPrice,
        maxPrice,
        effectiveAllergens
      );
      setMenuItems(menu);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Common allergens for space food

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    fetchFilteredItems(
      selectedPriceRange,
      event.target.value,
      selectedSpiceLevel,
      selectedAllergens
    );
  }

  function handleAllergenChange(allergen) {
    const newAllergens = selectedAllergens.includes(allergen)
      ? selectedAllergens.filter((a) => a !== allergen)
      : [...selectedAllergens, allergen];

    setSelectedAllergens(newAllergens);

    fetchFilteredItems(
      selectedPriceRange,
      selectedCategory,
      selectedSpiceLevel,
      newAllergens
    );
  }

  function handlePriceRangeChange(event) {
    setSelectedPriceRange(event.target.value);
    fetchFilteredItems(
      event.target.value,
      selectedCategory,
      selectedSpiceLevel,
      selectedAllergens
    );
  }

  function handleSpiceLevelChange(event) {
    setSelectedSpiceLevel(event.target.value);
    fetchFilteredItems(
      selectedPriceRange,
      selectedCategory,
      event.target.value,
      selectedAllergens
    );
  }

  function clearAllFilters() {
    setSearchText("");
    if (
      selectedCategory === "all" &&
      selectedAllergens.length === 0 &&
      selectedPriceRange === "all" &&
      selectedSpiceLevel === "all"
    ) {
      return;
    }
    setSelectedCategory("all");
    setSelectedAllergens([]);
    setSelectedPriceRange("all");
    setSelectedSpiceLevel("all");
    fetchFilteredItems("all", "all", "all", []);
  }

  const filteredMenuItems = menuItems.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  const totalItems = filteredMenuItems.length;

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
          🛸 {showFilters ? "Hide" : "Show"} Filters (
          {loading ? "Loading..." : `${totalItems} items`} )
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
                    {cat === "all" ? "All Categories" : cat}
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
                value={selectedPriceRange}
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
                value={selectedSpiceLevel}
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
                {spiceLevels.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all"
                      ? "All Spice Levels"
                      : cat.replace(/-/g, " ")}
                  </option>
                ))}
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
              {allergens.map((allergen) => (
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
      {GetItemScreen(totalItems)}
    </div>
  );
}

export default MenuPage;
