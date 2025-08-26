package com.cognizant.restaurant.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.restaurant.entity.Item;
import com.cognizant.restaurant.services.ItemService;

@RestController
public class ItemController {
	
	private ItemService itemService;
	
	public ItemController(ItemService itemService) {
		super();
		this.itemService = itemService;
	}

	@GetMapping("/all")
	public List<Item> getAllItems() {
		return itemService.getAllItems();
	}
	
	@PostMapping("/all")
	public void storeAllObjects() {
		itemService.setAllItems();
	}
}
