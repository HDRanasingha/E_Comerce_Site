import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isSidePanelVisible = false;
  isEditMode = false;
  editIndex: number | null = null;

  productObj: any = {
    productId: 0,
    productSku: "",
    productName: "",
    productPrice: 0,
    productShortName: "",
    productDescription: "",
    createdDate: new Date(),
    deliveryTimeSpan: "",
    categoryId: 0,
    productImageUrl: ""
  };

  categoryList = [
    { categoryId: 1, categoryName: 'Fruits' },
    { categoryId: 2, categoryName: 'Vegetables' },
    { categoryId: 3, categoryName: 'Dairy' },
    { categoryId: 4, categoryName: 'Snacks' },
    { categoryId: 5, categoryName: 'Beverages' }
  ];

  productsList = [
    {
      productId: 1,
      productSku: "SKU001",
      productName: 'Fresh Apples',
      productPrice: 2.99,
      productShortName: 'Apples',
      productDescription: 'Fresh and juicy apples',
      createdDate: new Date(),
      deliveryTimeSpan: "2 days",
      categoryId: 1,
      categoryName: 'Fruits',
      productImageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=774&q=80'
    }
    // ... more products
  ];

  openSidePanel() {
    this.isSidePanelVisible = true;
    this.isEditMode = false;
    this.resetForm();
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
    this.isEditMode = false;
    this.editIndex = null;
    this.resetForm();
  }

  onsave() {
    const category = this.categoryList.find(c => c.categoryId == this.productObj.categoryId);
    const newProduct = {
      ...this.productObj,
      productId: this.productsList.length + 1,
      categoryName: category ? category.categoryName : ''
    };
    this.productsList.push({ ...newProduct });
    this.closeSidePanel();
    alert('Product Created');
  }

  onedit(product: any, index: number) {
    this.isSidePanelVisible = true;
    this.isEditMode = true;
    this.editIndex = index;
    this.productObj = { ...product };
  }

  onupdate() {
    if (this.editIndex !== null) {
      const category = this.categoryList.find(c => c.categoryId == this.productObj.categoryId);
      this.productObj.categoryName = category ? category.categoryName : '';
      this.productsList[this.editIndex] = { ...this.productObj };
      this.closeSidePanel();
      alert('Product Updated');
    }
  }

  ondelete(index: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsList.splice(index, 1);
    }
  }

  resetForm() {
    this.productObj = {
      productId: 0,
      productSku: "",
      productName: "",
      productPrice: 0,
      productShortName: "",
      productDescription: "",
      createdDate: new Date(),
      deliveryTimeSpan: "",
      categoryId: 0,
      productImageUrl: ""
    };
  }
}