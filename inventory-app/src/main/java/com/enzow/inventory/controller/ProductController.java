package com.enzow.inventory.controller;

import com.enzow.inventory.exception.ResourceNotFoundException;
import com.enzow.inventory.model.Product;
import com.enzow.inventory.service.ProductServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * REST controller for mapping products in the inventory.
 * Exposes endpoints to list, add, update and delete products.
 * The controller interacts with a MySQL DB through the service {@link ProductServiceImp},
 * and its consumed by an Angular frontend hosted at 'http://localhost:4200'.
 */
@RestController
@RequestMapping("inventory-app")
@CrossOrigin(value= "http://localhost:4200")
public class ProductController {

    /**
     * Service injection
     */
    @Autowired
    private ProductServiceImp productService;

    /**
     * Retrieves a list of all products in the DB.
     * @return The list of {@link Product} type objects.
     */
    @GetMapping("/products")
    public List<Product> getProducts(){
        return  this.productService.listProducts();
    }

    /**
     * Adds a new Product to the inventory.
     * @param product The {@link Product} object to be added.
     * @return The saved product.
     */
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        return this.productService.saveProduct(product);
    }

    /**
     * Retrieves a product by its ID.
     *
     * @param id The ID of the product to retrieve.
     * @return A {@link ResponseEntity} containing the found {@link Product}.
     * @throws ResourceNotFoundException if no product is found with the given ID.
     */
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id){
        Product product = this.productService.findProductById(id);
        if(product != null) {
            return ResponseEntity.ok(product);
        } else {
            throw new ResourceNotFoundException("Id '" + id + "' not found.");
        }
    }

    /**
     * Updates an existing product by its ID.
     *
     * @param id ID of the product to update.
     * @param productReceived The new data to update the original product.
     * @return A {@link ResponseEntity} containing the updated {@link Product}.
     * @throws ResourceNotFoundException if the received product data is null.
     */
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> editProduct(@PathVariable int id, @RequestBody Product productReceived){
        Product product = this.productService.findProductById(id);

        if(productReceived != null) {
            product.setDescription(productReceived.getDescription());
            product.setPrice(productReceived.getPrice());
            product.setStock(productReceived.getStock());
        } else {
            throw new ResourceNotFoundException("Id '" + id + "' not found.");
        }

        this.productService.saveProduct(product);
        return ResponseEntity.ok(product);
    }

    /**
     * Deletes a product by its ID.
     *
     * @param id ID of the product to delete.
     * @return A {@link ResponseEntity} containing a confirmation map.
     * @throws ResourceNotFoundException if no product is found with the given ID.
     */
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable int id){
        Product product = this.productService.findProductById(id);

        if(product == null){
            throw new ResourceNotFoundException("Id '" + id + "' not found.");
        }

        this.productService.deleteProductById(product.getId_product());
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
