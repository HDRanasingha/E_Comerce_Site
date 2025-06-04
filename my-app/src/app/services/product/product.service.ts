import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/constant';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${Constant.API_END_POINT}/${Constant.METHODS.GET_ALL_PRODUCT}`);
  }

  saveProduct(product: any) {
    return this.http.post(`${Constant.API_END_POINT}/${Constant.METHODS.CREATE_Product}`, product);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${Constant.API_END_POINT}/${Constant.METHODS.CREATE_Product}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${Constant.API_END_POINT}/${Constant.METHODS.CREATE_Product}/${id}`);
  }
}