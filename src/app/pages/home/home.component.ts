import { Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ClientService } from '../../_services/client.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharityStore } from '../../_store/charity.store';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  charityStore = inject(CharityStore)
  router = inject(Router);
  async ngOnInit(): Promise<void> {
    this.charityStore.resetSelectedCharity();
    await this.charityStore.loadCharities();
  }
}
