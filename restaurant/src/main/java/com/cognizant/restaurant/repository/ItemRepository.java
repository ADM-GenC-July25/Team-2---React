package com.cognizant.restaurant.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cognizant.restaurant.dto.ItemProjection;
import com.cognizant.restaurant.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

    List<ItemProjection> findAllProjectedBy();
    List<ItemProjection> findAllProjectedBy(Pageable pageable);

}
