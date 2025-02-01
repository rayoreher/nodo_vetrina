import { Routes } from "@angular/router";
import { CharityComponent } from "./charity.component";
import { CampaignComponent } from "../campaign/campaign.component";
import { CartComponent } from "../cart/cart.component";

export const CHARITY_ROUTES: Routes = [
  {
    path: ":charitySlug",
    component: CharityComponent,
  },
  {
    path: ":charitySlug/campaign/:campaignSlug",
    component: CampaignComponent,
  },
  {
    path: ':charitySlug/cart',
    loadChildren: () => import('../cart/cart.routes').then(m => m.CART_ROUTES)
  },
];
