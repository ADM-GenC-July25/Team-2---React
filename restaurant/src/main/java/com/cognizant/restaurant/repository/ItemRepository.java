package com.cognizant.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.restaurant.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
