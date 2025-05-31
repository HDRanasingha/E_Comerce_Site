import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/admin/login/login.component';
// Import your ProductsComponent or other components as needed
import { ProductsComponent } from './Pages/admin/products/products.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: LayoutComponent},
 
  // ...add other routes as needed
];
