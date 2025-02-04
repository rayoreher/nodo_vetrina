import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ClientService } from "../_services/client.service";
import { Campaign, CartProduct, Charity, GetCampaign, GetCharity, Product } from "../_types/charity.type";
import { SnackbarType } from "../_types/snackbar-type.type";
import { MessageService } from "primeng/api";

type CharityState = {
    charities: Charity[];
    loading: boolean;
    selectedCharity: Charity | null;
    selectedCampaign: Campaign | null;
    cartItems: { [key: string]: CartProduct }
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
        (store, client = inject(ClientService), messageService = inject(MessageService)) => ({
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
                patchState(store, { selectedCharity: null, selectedCampaign: null, cartItems: {} });
            },
            resetSelectedCampaign() {
                patchState(store, { selectedCampaign: null });
            },
            addItemToCart(product: CartProduct) {
                const cartItems = store.cartItems();
                patchState(store, { cartItems:  { ...cartItems, [product.slug]: product }});
                this.snackbarInfo(`${product.name} aggiunto al carrello`);
            },
            updateCartProduct(product: CartProduct) {
                const cartItems = store.cartItems();
                patchState(store, { cartItems:  { ...cartItems, [product.slug]: product }});
            },
            deleteItemFromCart(productSlug: string) {
                const { [productSlug]: removedProperty, ...remainingObject } = store.cartItems();
                patchState(store, { cartItems:  { ...remainingObject }});
            },
            snackbarInfo(message: string) {
                messageService.add({ life: 3000, key: 'info', summary: message, styleClass: '!border-blue-800'});
            },
            snackbarError(message: string) {
                messageService.add({ life: 3000, key: 'error', summary: message, styleClass: '!border-red-800'});
            }
        })
    ),
    withComputed(({ cartItems, selectedCampaign }) => ({
        filteredProducts: computed(() => {
            return selectedCampaign()?.products || []
        }),
        productsCount: computed(() => {
            return Object.values(cartItems()).length;
        }),
        totalPrice: computed(() => {
            return Object.values(cartItems()).reduce((acc, current) => acc + (current.price * current.quantity), 0) || 0
        }),
        cartProducts: computed(() => {
            return Object.values(cartItems()).map(x => x as CartProduct);       
        })
    }))
);
