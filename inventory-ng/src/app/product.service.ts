import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

/**
 * Services for managing product data through HTTP requests.
 * 
 * It communicates with a Spring Boot backend available at:
 * http://localhost:8080/inventory-app/products
 * 
 * The backend is connected to a MySQL DB to persist products data.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /** Base URL of the REST API exposed by the backend. */
  private baseUrl: string = "http://localhost:8080/inventory-app/products";

  /** Angular's HttpClient used for making HTTP requests. */
  private httpClient: HttpClient = inject(HttpClient);

  /**
   * Fetches the complete list of products from the backend.
   * @returns An observable emitting an array of 'Product' type objects.
   */
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  /**
   * Sends a new product to the backend to be persisted in the DB.
   * @param product The Product object to be created.
   * @returns An observable with the response from the backend.
   */
  addProduct(product: Product): Observable<Object>{
    return this.httpClient.post(this.baseUrl, product);
  } 

  /**
   * Fetches a specific product by its ID.
   * @param id The ID of the product to retrieve.
   * @returns An observable emmiting the corresponding Product object.
   */
  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  /**
   * Updates an existing product using its ID and new data.
   * @param id The ID of the product to update.
   * @param product The new data of the product.
   * @returns An observable with the response from the backend.
   */
  editProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, product);
  }

  /**
   * Deletes a product from the backend using its ID.
   * @param id The ID of the product to delete.
   * @returns An observable with the response from the backend.
   */
  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
