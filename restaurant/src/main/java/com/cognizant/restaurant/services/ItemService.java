package com.cognizant.restaurant.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.cognizant.restaurant.entity.Category;
import com.cognizant.restaurant.entity.Item;
import com.cognizant.restaurant.entity.SpiceLevel;
import com.cognizant.restaurant.dto.ItemProjection;
import com.cognizant.restaurant.entity.Allergen;
import com.cognizant.restaurant.repository.AllergenRepository;
import com.cognizant.restaurant.repository.CategoryRepository;
import com.cognizant.restaurant.repository.ItemRepository;
import com.cognizant.restaurant.repository.SpiceLevelRepository;

@Service
public class ItemService {
	
	private ItemRepository itemRepository;
	private CategoryRepository categoryRepository;
	private AllergenRepository allergenRepository;
	private SpiceLevelRepository spiceLevelRepository;

	public ItemService(ItemRepository itemRepository, CategoryRepository categoryRepository,
			AllergenRepository allergenRepository, SpiceLevelRepository spiceLevelRepository) {
		super();
		this.itemRepository = itemRepository;
		this.categoryRepository = categoryRepository;
		this.allergenRepository = allergenRepository;
		this.spiceLevelRepository = spiceLevelRepository;
	}
	
	public List<ItemProjection> getAllItems() {
		return itemRepository.findAllProjectedBy();
	}
	
	public void setAllItems() {
		Category[] categories = {
			new Category("Beverages"),
			new Category("Appetizers"),
			new Category("Main Course"),
			new Category("Desserts")
		};

		for(Category category : categories) {
			categoryRepository.saveAndFlush(category);
		}

		SpiceLevel[] spiceLevels = {
			new SpiceLevel("Mild"),
			new SpiceLevel("Medium"),
			new SpiceLevel("Hot")
		};

		for(SpiceLevel spiceLevel : spiceLevels) {
			spiceLevelRepository.saveAndFlush(spiceLevel);
		}

		Item[] items = {
			new Item(
				"Cosmic Coffee",
				"Premium coffee blend from distant star systems",
				categories[0],
				spiceLevels[0],
				8.50,
				"cosmic_coffee.jpg",
				10,
				1
			)
			// new Item(1, "Cosmic Coffee", "Premium coffee blend from distant star systems", 8.50),
			// new Item(2, "Nebula Tea", "Herbal tea infused with stardust essence", 7.00),
		};
		for(Item item : items) {
			itemRepository.saveAndFlush(item);
		}
		
		Allergen[] allergens = {
			new Allergen("Gluten", items[0]),
			new Allergen("Nuts", items[0]),
			new Allergen("Dairy", items[0]),
			new Allergen("Shellfish", items[0])
		};
		for(Allergen allergen : allergens) {
			allergenRepository.saveAndFlush(allergen);
		}
	}

	public Map<String, List<String>> getOptions() {

		Map<String, List<String>> options = new HashMap<>();
		
		options.put("categories", categoryRepository
				.findAll()
				.stream()
				.sorted((a, b) -> a.getId() > b.getId() ? 1 : -1)
				.map((c) -> c.getName())
				.toList());
		options.put("allergens", allergenRepository
				.findAll()
				.stream()
				.sorted((a, b) -> a.getId() > b.getId() ? 1 : -1)
				.map((a) -> a.getName())
				.toList());
		options.put("spiceLevels", spiceLevelRepository
				.findAll()
				.stream()
				.sorted((a, b) -> a.getId() > b.getId() ? 1 : -1)
				.map((s) -> s.getName())
				.toList());

		return options;
	}

	public List<ItemProjection> getFeaturedItems(int number) {
		PageRequest pageRequest = PageRequest.of(number, number, Sort.by(Sort.DEFAULT_DIRECTION.ASC, "popularity"));
		return itemRepository.findAllProjectedBy(pageRequest);
	}
	
	public List<ItemProjection> getFilteredItems(
			String categoryName,
			String spiceLevelName,
			Double minPrice,
			Double maxPrice,
			List<String> execludedAllergens
			){
		return itemRepository.findFilteredItems(categoryName, spiceLevelName, minPrice, maxPrice, execludedAllergens);
		
	}
}
