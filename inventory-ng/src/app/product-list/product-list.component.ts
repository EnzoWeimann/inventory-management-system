import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Component responsible for displaying the list of products.
 * Allows editing and deleting products.
 */
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  /** Array of products fetched from the backend. */
  products !: Product[];

  /** Injection of service to handle HTTP operations related to products. */
  private productService : ProductService = inject(ProductService);

  /** Injection of Angular service to navigate in the app. */
  private router: Router = inject(Router);

  /**
   * Angular lifecycle hook executed on component initialization.
   * Fetches the list of products.
   */
  ngOnInit(){
    this.getProducts();
  }

  /** 
   * Fetches the product list from the backend service.
   * If successful, fills the product array with the retrieved product list.
   * If an error occurs, it is logged to the console.
   */
  private getProducts(): void {
    this.productService.getProductList().subscribe(
      {
        next: (data) => {
          this.products = data;
        },
        error: (error) => {
          console.error("Error fetching product list: ", error)
        }
      }
    );
  }

  /**
   * Redirects to the edit product form for the given product ID.
   * @param id The ID of the product to edit.
   */
  editProduct(id: number):void {
    this.router.navigate(["edit-product", id]);
  }

  /**
   * Deletes a product by its ID and refreshes the product list after deletion.
   * @param id The ID of the product to delete.
   */
  deleteProduct(id: number):void {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    
    if(confirmDelete){
      this.productService.deleteProduct(id).subscribe({
        next: (data) => this.getProducts(),
        error: (error) => console.log(error)
      });
    }
  }
}
