import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    { id:1, name: 'watch cizen', price: 500000, image: 'assets/images/xanh.webp'},
    { id:2, name: 'watch casino', price: 600000, image: 'assets/images/vang.webp'},
    { id:3, name: 'watch ss', price: 500000, image: 'assets/images/xanh.webp'},
    { id:4, name: 'watch cizen dragon', price: 5500000, image: 'assets/images/vang.webp'},
    { id:5, name: 'watch apple', price: 700000, image: 'assets/images/xanh.webp'},
  ]

}
