package com.enzow.inventory.repository;

import com.enzow.inventory.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for accessing and managing {@link Product} entities.
 * Extends {@link JpaRepository} to provide standar CRUD operations.
 */
public interface IProductRepository extends JpaRepository<Product, Integer> {
}
