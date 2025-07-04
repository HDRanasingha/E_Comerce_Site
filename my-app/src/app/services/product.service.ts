import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private nodeApiUrl = 'http://localhost:3000/api';
  private dotnetApiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  // Node.js API endpoints
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.nodeApiUrl}/products`);
  }

  // .NET API endpoints can be added here
  getDotNetProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.dotnetApiUrl}/products`);
  }
}