export type Charity = {
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    campaigns: Campaign[];
}

export type Campaign = {
    charitySlug: string;
    name: string;
    slug: string;
    description: string;
    type: string;
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    products: Product[];
}

export type Product = {
    campaignSlug: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

export type CartProduct = Product & {
    quantity: number;
}

export type GetCampaign = {
    charity: Charity;
    campaign: Campaign;
}

export type GetCharity = Omit<Charity, 'campaigns'>;
