import { Component, input, output } from '@angular/core';
import { CartIconComponent } from "../cart-icon/cart-icon.component";

@Component({
  selector: 'app-cart-button',
  imports: [CartIconComponent],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss'
})
export class CartButtonComponent {
  click = output();
  itemsInCart = input.required<number>();
}
