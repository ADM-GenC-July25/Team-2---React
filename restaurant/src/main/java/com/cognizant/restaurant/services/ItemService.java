package com.cognizant.restaurant.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.restaurant.entity.Item;
import com.cognizant.restaurant.repository.ItemRepository;

@Service
public class ItemService {
	
	private ItemRepository itemRepository;

	public ItemService(ItemRepository itemRepository) {
		super();
		this.itemRepository = itemRepository;
	}
	
	public List<Item> getAllItems() {
		return itemRepository.findAll();
	}
	
	public void setAllItems() {
		Item[] items = {
			new Item(1, "Cosmic Coffee", "Premium coffee blend from distant star systems", 8.50),
			new Item(2, "Nebula Tea", "Herbal tea infused with stardust essence", 7.00),
		};
		for(Item item : items) {
			itemRepository.saveAndFlush(item);
		}
	}
	
	

}
