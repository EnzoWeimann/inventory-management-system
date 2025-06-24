package com.enzow.inventory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity class representing a product in the system.
 * Each product has a unique ID, a textual description, a price and a stock quantity.
 * This class uses Lombok annotations:
 * - {@code @Data} automatically generates getters, setters, toString, equals and hashCode methods.
 * - {@code @NoArgsConstructor} creates a default no-argument constructor.
 * - {@code @AllArgsConstructor} creates a constructor with all fields.
 *
 * This entity is mapped to a MySQL table by JPA.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    /**
     * Unique identifier for the product.
     * It is auto-generated using the identity strategy.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id_product;

    /**
     * Textual description of the product.
     */
    @NotNull(message = "Description cannot be null")
    @Size(min = 2, max = 100, message = "Description must be between 2 and 100 characters")
    String description;

    /**
     * Price of the product, expressed as a decimal number.
     * It must be greater than or equal to zero.
     */
    @NotNull(message = "Price cannot be null")
    @PositiveOrZero(message = "Price must be zero or positive")
    Double price;

    /**
     * Number of units available in stock.
     * It must be a non-negative integer.
     */
    @NotNull(message = "Stock cannot be null")
    @Min(value = 0, message = "Stock must be 0 or greater")
    Integer stock;
}
