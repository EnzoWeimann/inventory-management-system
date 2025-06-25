import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

/**
 * App routes configuration.
 * 
 * Defines the navigation paths used in the Angular frontend.
 * All routes are related to product management.
 */
export const routes: Routes = [
    //Shows the product list,
    {path: 'products', component: ProductListComponent},

    //Redirects empty path to product list.
    {path: '', redirectTo: 'products', pathMatch: 'full'},

    //Route to add a new product.
    {path: 'add-product', component: AddProductComponent},

    //Route to edit an existing product by ID.
    {path: 'edit-product/:id', component: EditProductComponent}
];
