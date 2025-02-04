import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharityStore } from '../../_store/charity.store';
import { CartProduct } from '../../_types/charity.type';
import { AccordionModule } from 'primeng/accordion';
import { ItemCardComponent } from "./components/item-card/item-card.component";
@Component({
  selector: 'app-campaign',
  imports: [CommonModule, FormsModule, AccordionModule, ItemCardComponent],
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

  onAddToCart(product: CartProduct){
    this.charityStore.addItemToCart(product)
  }
}
