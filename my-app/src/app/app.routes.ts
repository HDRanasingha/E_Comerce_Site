import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/admin/login/login.component';
import { ProductsComponent } from './Pages/admin/products/products.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'products', component: ProductsComponent }
      // Add more child routes as needed
    ]
  }
];
