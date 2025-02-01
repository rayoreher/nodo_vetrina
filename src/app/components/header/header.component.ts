import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from '../../_types/menu-item.type';
import { CharityStore } from '../../_store/charity.store';
import { CommonModule } from '@angular/common';
import { CartButtonComponent } from "../cart-button/cart-button.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule, CartButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  charityStore = inject(CharityStore);
  title = input.required<string>();
  menuItems = input.required<MenuItem[]>();
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  navigate() {
    this.router.navigate(['charity', this.charityStore.selectedCharity()?.slug, 'cart']);
  }
}
