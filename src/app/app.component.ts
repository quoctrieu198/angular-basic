import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';

import { NgFor } from '@angular/common';
import { ProductItemsComponent } from './shared/product-item/products-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderLayoutComponent ,
    ProductItemsComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
