import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss'
})
export class CartButtonComponent {
  itemsInCart = input.required<number>();
}
