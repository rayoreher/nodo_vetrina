import { Routes } from "@angular/router";
import { CampaignComponent } from "../campaign/campaign.component";
import { CartComponent } from "./cart.component";

export const CART_ROUTES: Routes = [
  {
    path: "",
    component: CartComponent
  }
];
