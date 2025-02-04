import { Component, input, output } from '@angular/core';
import { CartProduct } from '../../../../_types/charity.type';
import { CloseIconComponent } from "../../../../components/close-icon/close-icon.component";

@Component({
  selector: 'app-item-card',
  imports: [CloseIconComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  product = input.required<CartProduct>();
  updateProduct = output<CartProduct>();
  removeProduct = output<string>();
  updatequantity(quantity: number) {
    this.updateProduct.emit({ ...this.product(), quantity: quantity });
  }
}
