import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Component to handle the creation of new products.
 * 
 * Displays a form where users can input product data.
 * On submission, the product is sent to the backend via ProductService.
 * After successful creation, the user is redirected to the product list view.
 */
@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {

  /** Model used to bind form inputs. */
  product: Product = new Product();

  /** Service to interact with the product-related backend API. */
  private productService: ProductService = inject(ProductService);

  /** Angular router used for navigation in the app. */
  private router: Router = inject(Router);

  /**
   * Called when the form is submitted.
   * Triggers the product creation process.
   */
  onSubmit(){
    this.saveProduct();
  }

  /**
   * Sends the new product to the backend.
   * If successful, navigates back to the product list.
   * If an error occurs, it is logged to the console.
   */
  saveProduct(){
    this.productService.addProduct(this.product).subscribe({
      next: (data) => {
        this.goToProductList();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  /** Navigates the user to the product list view. */
  goToProductList(){
    this.router.navigate(['/products']);
  }

}
