import { signalStore, withMethods, withState } from "@ngrx/signals";

type CartProduct = {
    productSlug: string;
    quantity: number;
};

type CartState = {
    cartProducts: CartProduct[];
    loading: boolean;
};

const initialState: CartState = {
    cartProducts: [],
    loading: false,
};

export const CartStore = signalStore(
    { providedIn: "root" },
    withState(initialState)
);
