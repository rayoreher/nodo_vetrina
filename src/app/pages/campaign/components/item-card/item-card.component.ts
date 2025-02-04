import { Component, input, output, signal } from '@angular/core';
import { CartIconComponent } from "../../../../components/cart-icon/cart-icon.component";
import { CartProduct, Product } from '../../../../_types/charity.type';

@Component({
  selector: 'app-item-card',
  imports: [CartIconComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  quantity = signal(1);
  product = input.required<Product>();
  addProductToCart = output<CartProduct>();

  onAddProductToCart() {
    this.addProductToCart.emit({ ...this.product(), quantity: this.quantity() });
    this.quantity.set(1);
  }
}
