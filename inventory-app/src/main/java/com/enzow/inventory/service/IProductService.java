package com.enzow.inventory.service;

import com.enzow.inventory.model.Product;

import java.util.List;

/**
 * Service interface for managing products.
 *
 * Provides methods for retrieving, saving and deleting product data.
 * Implementations of this interface handle communication with the data persistence layer (the MySQL DB).
 */
public interface IProductService {

    /**
     * Retrieves all products form the DB.
     * @return A list of {@link Product} objects.
     */
    List<Product> listProducts();

    /**
     * Retrieves a product by its ID.
     * @param idProduct The ID of the product to find.
     * @return The found {@link Product} or {@code null} if not found.
     */
    Product findProductById(Integer idProduct);

    /**
     * Saves a new product in the DB if the ID is null,
     * or updates an existing product if the ID has a value.
     * @param product The {@link Product} object to save.
     * @return The saved {@link Product}.
     */
    Product saveProduct(Product product);

    /**
     * Deletes a product by its ID.
     * @param idProduct The ID of the product to delete.
     */
    void deleteProductById(Integer idProduct);
}
