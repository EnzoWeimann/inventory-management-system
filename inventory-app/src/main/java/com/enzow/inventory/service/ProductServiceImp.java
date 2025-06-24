package com.enzow.inventory.service;

import com.enzow.inventory.model.Product;
import com.enzow.inventory.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementation of the {@link IProductService} interface.
 *
 * This service handles logic related to products
 * and communicates with the DB through {@link IProductRepository}.
 */
@Service
public class ProductServiceImp implements IProductService{

    /**
     * {@link IProductRepository} dependency injection.
     */
    @Autowired
    private IProductRepository productRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public List<Product> listProducts() {
        return this.productRepository.findAll();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Product findProductById(Integer idProduct) {
        return this.productRepository.findById(idProduct).orElse(null);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Product saveProduct(Product product) {
       return this.productRepository.save(product);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void deleteProductById(Integer idProduct) {
        this.productRepository.deleteById(idProduct);
    }
}
