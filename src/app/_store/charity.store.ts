import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ClientService } from "../_services/client.service";
import { Campaign, Charity, GetCampaign, GetCharity } from "../_types/charity.type";

type CharityState = {
    charities: Charity[];
    loading: boolean;
    selectedCharity: Charity | null;
    selectedCampaign: Campaign | null;
    cartItems: { [key: string]: number }
};

const initialState: CharityState = {
    charities: [],
    loading: false,
    selectedCharity: null,
    selectedCampaign: null,
    cartItems: {}
};

export const CharityStore = signalStore(
    { providedIn: "root" },
    withState(initialState),
    withMethods(
        (store, client = inject(ClientService)) => ({
            async loadCharities() {
                patchState(store, { loading: true });
                const charities = await client.getCharitiesPromise();
                patchState(store, { charities: charities, loading: false });
            },
            async loadCharityBySlug(charitySlug: string) {
                patchState(store, { loading: true });
                const charity = await client.getCharityBySlugPromise(charitySlug);
                patchState(store, { selectedCharity: charity, loading: false });
            },
            async loadCampaignBySlug(charitySlug: string, campaignSlug: string) {
                patchState(store, { loading: true });
                const campaign = await client.getCampaignBySlugPromise(charitySlug, campaignSlug);
                patchState(store, { selectedCampaign: campaign.campaign, selectedCharity: campaign.charity, loading: false });
            },
            resetSelectedCharity() {
                patchState(store, { selectedCharity: null, selectedCampaign: null });
            },
            resetSelectedCampaign() {
                patchState(store, { selectedCampaign: null });
            },
            addItemToCart(productSlug: string, quantity: number) {
                const cartItems = store.cartItems();
                patchState(store, { cartItems:  { ...cartItems, [productSlug]: quantity }});
            },
            updateCartItemQuantity(productSlug: string, quantity: number) {
                const cartItems = store.cartItems();
                patchState(store, { cartItems:  { ...cartItems, [productSlug]: quantity }});
            },
            deleteItemFromCart(productSlug: string) {
                const { [productSlug]: removedProperty, ...remainingObject } = store.cartItems();
                patchState(store, { cartItems:  { ...remainingObject }});
            }
        })
    ),
    withComputed(({ cartItems, selectedCampaign }) => ({
        filteredProducts: computed(() => {
            return selectedCampaign()?.products.filter(x => !cartItems()[x.slug]) || []
        }),
        productsCount: computed(() => {
            return Object.values(cartItems()).length;
        }),
        totalPrice: computed(() => {
            return selectedCampaign()?.products.filter(x => cartItems()[x.slug]).reduce((acc, current) => acc + (current.price * cartItems()[current.slug]), 0) || 0
        }),
        cartProducts: computed(() => {
            return (selectedCampaign()?.products.filter(x => cartItems()[x.slug]).map(x => {return {...x, quantity: cartItems()[x.slug]}}) || [])
        })
    }))
);
