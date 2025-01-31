import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharityStore } from '../../_store/charity.store';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-campaign',
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent implements OnInit {
  charityStore = inject(CharityStore);
  charitySlug = input.required<string>();
  campaignSlug = input.required<string>();
  async ngOnInit(): Promise<void> {
    await this.charityStore.loadCampaignBySlug(this.charitySlug(), this.campaignSlug());
  }

  onAddToCart(data: { productSlug: string, quantity: number }){
    this.charityStore.addItemToCart(data.productSlug, data.quantity)
  }
}
