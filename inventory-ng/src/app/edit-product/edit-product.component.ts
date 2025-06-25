import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Component responsible for editing an existing product.
 * 
 * It retrieves the product ID from the route parameters, 
 * fetches the product from the backend, binds the form data to the product object, 
 * and sends an update request upon submission.
 */
@Component({
  selector: 'app-edit-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {

  /** Holds the product data to be edited. */
  product: Product = new Product();

  /** ID of the product to be edited (retrieved from route). */
  id !: number;

  /** 
   * Injects the required services:
   * - ProductService: Service to interact with the product-related backend API.
   * - Router: Angular router used for navigation in the app.
   * - ActivatedRoute: Allows to access params information in the URL.
   */
  private productService: ProductService = inject(ProductService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  /**
   * Lifecycle hook that runs once the component initializes.
   * Retrieves the product ID from the route and fetches its data from the backend.
   * If successful, bind retrieved product data to the form.
   * If an error occurs, it is logged to the console.
   */
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  /** Triggered on form submission. Calls the update logic. */
  onSubmit(){
    this.saveProduct();
  }

  /**
   * Sends the updated product data to the backend.
   * Navigates back to the product list on success.
   * If an error occurs, it is logged to the console.
   */
  saveProduct(){
    this.productService.editProduct(this.id, this.product).subscribe({
      next: (data) => this.goToProductList(),
      error: (error) => console.log(error)
    });
  }

  /** Redirects the user to the product list view. */
  goToProductList(){
    this.router.navigate(["/products"]);
  }
}
