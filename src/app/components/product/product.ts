import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel as Product } from "../../models/product";
import { ProductService } from "../../services/product";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true
})
export class ProductComponent implements OnInit {

  protected products: Product[] = [];

  protected newProduct: Product = {
    name:'',
    price:0,
    published:false
  };

  protected selectedProduct: Product = {
    name:'',
    price:0,
    published:false
  };

  constructor(
    private productService: ProductService, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  deleteProduct(id: string|undefined){
    if(id !== undefined){
      if(confirm(`Êtes vous sûre de vouloir suppimer le produit qui son id est ${id}`)){
        this.productService.deleteProduct(id).subscribe({
          next:(deleted)=>{
            this.products= this.products.filter(p=>p.id !== id)
            this.cdr.detectChanges();
          },
          error: err =>{
            console.log(err);
          }
        });
      }
    }
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct(this.newProduct).subscribe((createdProduct) => {
        this.products.push(createdProduct);
        this.newProduct = { name: '', price: 0, published: false };
        this.cdr.detectChanges();
      });
    }
  }

  showSelectedProduct(id: string | undefined){
    if(id !== undefined){
      this.productService.getProduct(id).subscribe((p) => {
        this.selectedProduct = p;
        this.cdr.detectChanges();
      });
    }
  }

  updateProduct(){
    this.productService.updateProduct(this.selectedProduct).subscribe((updated) => {
      const index = this.products.findIndex(p => p.id === updated.id);
    
      if (index !== -1) {
        this.products[index] = { ...updated };
        this.cdr.detectChanges();
      }
    });
  }
}
