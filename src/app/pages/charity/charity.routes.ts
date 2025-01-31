import { Routes } from "@angular/router";
import { CharityComponent } from "./charity.component";
import { CampaignComponent } from "../campaign/campaign.component";

export const CHARITY_ROUTES: Routes = [
  {
    path: ":charitySlug",
    component: CharityComponent
  },
  {
    path: ":charitySlug/campaign/:campaignSlug",
    component: CampaignComponent,
  }
];
