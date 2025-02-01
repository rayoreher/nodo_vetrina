import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss'
})
export class CartButtonComponent {
  click = output();
  itemsInCart = input.required<number>();
}
