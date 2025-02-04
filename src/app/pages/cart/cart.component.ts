import { Component, inject } from '@angular/core';
import { CharityStore } from '../../_store/charity.store';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CartProduct } from '../../_types/charity.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [ItemCardComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  charityStore = inject(CharityStore);
  onUpdateProduct(product: CartProduct) {
    this.charityStore.updateCartProduct(product);
  }

  onRemoveProduct(productSlug: string){
    this.charityStore.deleteItemFromCart(productSlug);
  }
}
