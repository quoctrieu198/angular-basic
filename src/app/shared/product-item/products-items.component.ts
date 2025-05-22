import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { productItems } from '../types/productItem';

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [
        FormsModule, 
        CurrencyPipe, 
        UpperCasePipe, 
        NgFor,
        RouterLink,
    ],
    templateUrl: './products-items.component.html',
    styleUrl: './products-items.component.css'
})

export class ProductItemsComponent {
    @Input() products: productItems[] = [];

    @Output() dataEvent = new EventEmitter<number>();

    get totalPrice() : string {
        const sum = this.products.reduce((total,item) => {
            return total + item.price;
        }, 0);
        
        return `Tổng tiền: ${sum.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
    }

    handleDelete = (id: number) => {
        this.dataEvent.emit(id);
    }
}