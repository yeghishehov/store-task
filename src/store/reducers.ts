import { IAction, SET_THEME, SET_MOBILE, SET_CATEGORIES, SET_PRODUCTS, SELECT_PRODUCT } from "./actions";
import { IStore } from "./store";

export function reducer(store: IStore, action: IAction): IStore {
    switch (action.type) {
        case SET_THEME:
            return { ...store, theme: action.payload as IStore["theme"] };
        case SET_CATEGORIES:
            return { ...store, categories: action.payload as IStore["categories"] };
        case SET_PRODUCTS:
            return { ...store, products: action.payload as IStore["products"] };
        case SELECT_PRODUCT:
            return { ...store, selectedProduct: action.payload as IStore["selectedProduct"] };
        case SET_MOBILE:
            return { ...store, isMobile: action.payload as IStore["isMobile"] };
        default:
            return store;
    }
}
