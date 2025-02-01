import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharityStore } from '../../_store/charity.store';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../_types/charity.type';
import { SnackbarService } from '../../_services/snackbar.service';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-campaign',
  imports: [CommonModule, FormsModule, ProductCardComponent, AccordionModule],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent implements OnInit {
  charityStore = inject(CharityStore);
  snackbarService = inject(SnackbarService)
  charitySlug = input.required<string>();
  campaignSlug = input.required<string>();
  async ngOnInit(): Promise<void> {
    console.log('ciso', this.charitySlug(), this.campaignSlug());
    
    await this.charityStore.loadCampaignBySlug(this.charitySlug(), this.campaignSlug());
  }

  onAddToCart({ product, quantity }: { product: Product, quantity: number }){
    this.snackbarService.infoMessage(`${product.name} aggiunto al carrello`);
    this.charityStore.addItemToCart(product, quantity)
  }
}
