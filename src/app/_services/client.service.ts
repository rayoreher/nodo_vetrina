import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom, map } from "rxjs";
import { Charity, GetCampaign } from "../_types/charity.type";
import { startOfDay } from "date-fns";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  http = inject(HttpClient);
  constructor() {}

  getCharities() {
    return this.http.get<Charity[]>("./json/home-charities.json");
  }

  getCharitiesPromise() {
    return lastValueFrom(this.getCharities());
  }

  getCharityBySlugPromise(charitySlug: string) {
    return lastValueFrom(this.getCharityBySlug(charitySlug));
  }

  getCharityBySlug(charitySlug: string) {
    return this.getCharities().pipe(
      map((x) => (x.find((f) => f.slug === charitySlug)) ?? null),
      map((x) => {
        if (!x) {
          throw new Error("Charity not found");
        }
        return x;
      }),
      map((x) => {
        const today = startOfDay(new Date());
        x.campaigns = x.campaigns.filter((f) =>
          startOfDay(f.startDate) <= today &&
          startOfDay(f.endDate) >= today
        );
        return x;
      }),
    );
  }

  getCampaignBySlug(charitySlug: string, campaignSlug: string) {
    return this.getCharityBySlug(charitySlug).pipe(
      map((x) => { return {charity: x, campaign: x.campaigns.find((f) => f.slug === campaignSlug)} }),
      map((x) => {
        if (!x.campaign) {
          throw new Error("Charity not found");
        }
        return { charity: x.charity, campaign: x.campaign } as GetCampaign;
      }),
    );
  }

  getCampaignBySlugPromise(charitySlug: string, campaignSlug: string) {
    return lastValueFrom(this.getCampaignBySlug(charitySlug, campaignSlug));
  }
}
