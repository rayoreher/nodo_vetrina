import { Component, inject } from '@angular/core';
import { CartItemComponent } from "../../components/cart-item/cart-item.component";
import { CharityStore } from '../../_store/charity.store';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  charityStore = inject(CharityStore);
  onUpdateQuantity({quantity, productSlug}: { quantity: number, productSlug: string }) {
    this.charityStore.updateCartItemQuantity(productSlug, quantity);
  }

  onRemoveItem(productSlug: string){
    this.charityStore.deleteItemFromCart(productSlug);
  }
}
