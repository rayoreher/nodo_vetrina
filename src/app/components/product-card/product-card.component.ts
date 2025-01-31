import { Component, input, OnInit, output, signal } from '@angular/core';
import { Product } from '../../_types/charity.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  product = input.required<Product>();
  onAddToCart = output<{ productSlug: string, quantity: number }>();
  quantity = signal(1);
  ngOnInit(): void {
    if (this.product().stock === 0) {
      this.quantity.set(0);
    }
  }
  buttonClick(productSlug: string, quantity: number) {
    this.quantity.set(1);
    this.onAddToCart.emit({ productSlug, quantity })
  }
}
