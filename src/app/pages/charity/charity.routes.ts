import { Routes } from "@angular/router";
import { CharityComponent } from "./charity.component";
import { CampaignComponent } from "../campaign/campaign.component";
import { CartComponent } from "../cart/cart.component";
import { CheckoutComponent } from "../checkout/checkout.component";

export const CHARITY_ROUTES: Routes = [
  {
    path: ":charitySlug",
    component: CharityComponent,
  },
  {
    path: ':charitySlug/cart',
    component: CartComponent
  },
  {
    path: ':charitySlug/cart/checkout',
    component: CheckoutComponent
  },
  {
    path: ":charitySlug/:campaignSlug",
    component: CampaignComponent,
  }
];
