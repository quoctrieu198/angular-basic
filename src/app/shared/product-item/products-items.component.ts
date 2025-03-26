import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

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

}