import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { productItems } from '../shared/types/productItem';
import { ProductItemsComponent } from '../shared/product-item/products-items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductItemsComponent  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  nameBtn = 'Xem chi tiết';
  clickMessage = '';
  bindingMessage = '';
  isVisible = false;

  products: productItems[] = [
    { id:1, name: 'watch cizen', price: 500000, image: 'assets/images/xanh.webp'},
    { id:2, name: 'watch casino', price: 600000, image: 'assets/images/vang.webp'},
    { id:3, name: 'watch ss', price: 500000, image: 'assets/images/xanh.webp'},
    { id:4, name: 'watch cizen dragon', price: 5500000, image: 'assets/images/vang.webp'},
    { id:5, name: 'watch apple', price: 700000, image: 'assets/images/xanh.webp'},
  ]

  constructor() {
    console.log('Initalize Component'); 
  }

  ngOnInit(): void {
    console.log('Initalized Component');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  handleDelete = (id: number) => {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }

}
