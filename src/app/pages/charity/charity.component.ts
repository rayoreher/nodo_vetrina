import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CharityStore } from '../../_store/charity.store';

@Component({
  selector: 'app-charity',
  imports: [CommonModule, CardComponent],
  templateUrl: './charity.component.html',
  styleUrl: './charity.component.scss'
})
export class CharityComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  charityStore = inject(CharityStore);
  charitySlug = input.required<string>();

  async ngOnInit(): Promise<void> {    
    this.charityStore.resetSelectedCampaign();
    await this.charityStore.loadCharityBySlug(this.charitySlug());
    if (this.charityStore.selectedCharity() && this.charityStore.selectedCharity()!.campaigns.length === 1) {
      this.router.navigate([ this.charityStore.selectedCharity()!.campaigns[0].slug], { relativeTo: this.route })
    }
  }
}
