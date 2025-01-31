import { Component, input, output } from '@angular/core';
import { CartProduct, Product } from '../../_types/charity.type';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  product = input.required<CartProduct>();
  updateQuantity = output<{quantity: number, productSlug: string }>();
  removeItem = output<string>();
}
