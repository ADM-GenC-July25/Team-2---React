/*
const API_BASE_URL =
  "http://978337test-env.eba-mz9qwfxb.us-west-2.elasticbeanstalk.com";

  */
const API_BASE_URL = "/api";

/*

// use this in this file
const API_BASE_URL = "/api";

// add this into vite.config.js for proxying to bypass CORS
server: {
    proxy: {
      "/api": {
        target:
          "http://978337test-env.eba-mz9qwfxb.us-west-2.elasticbeanstalk.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
*/

export const MenuRepository = {
  async fetchAllMenuItems() {
    try {
      const response = await fetch(`${API_BASE_URL}/all`);
      if (!response.ok) throw new Error("Failed to fetch all menu items");
      return await response.json();
    } catch (error) {
      console.error("Error in fetchAllMenuItems:", error);
      throw error;
    }
  },

  async fetchFeaturedItems(limit) {
    try {
      const response = await fetch(`${API_BASE_URL}/featured/${limit}`);
      if (!response.ok) throw new Error("Failed to fetch featured items");
      return await response.json();
    } catch (error) {
      console.error("Error in fetchFeaturedItems:", error);
      throw error;
    }
  },

  async fetchFilteredMenuItems(
    category = "",
    spiceLevel = "",
    minPrice = "",
    maxPrice = "",
    allergens = []
  ) {
    let url = `${API_BASE_URL}/filtered`;

    let queryParams = [];

    if (category !== "") queryParams.push(`category=${category}`);
    if (spiceLevel !== "") queryParams.push(`spiceLevel=${spiceLevel}`);
    if (minPrice !== "") queryParams.push(`minPrice=${minPrice}`);
    if (maxPrice !== "") queryParams.push(`maxPrice=${maxPrice}`);
    if (allergens.length > 0)
      queryParams.push(`excludedAllergens=${allergens.join(",")}`);

    if (queryParams.length > 0) {
      url += "?" + queryParams.join("&");
    }

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch filtered menu items");
      return await response.json();
    } catch (error) {
      console.error("Error in fetchFilteredMenuItems:", error);
      throw error;
    }
  },

  async fetchMenuOptions() {
    try {
      const response = await fetch(`${API_BASE_URL}/options`);
      if (!response.ok) throw new Error("Failed to fetch menu options");
      return await response.json();
    } catch (error) {
      console.error("Error in fetchMenuOptions:", error);
      throw error;
    }
  },
};
