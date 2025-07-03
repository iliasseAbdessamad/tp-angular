import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductModel as Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = "http://localhost:3000/products";

  //dependency injection
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL)
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product)
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiURL}/${product.id}`, product)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.apiURL}/${id}`);
  } 
}
