import { IStore } from "./store";

export interface IAction {
    type: string;
    payload?: unknown;
}

export const SET_THEME = "SET_THEME";
export const SET_MOBILE = "SET_MOBILE";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECT_PRODUCT = "SELECT_PRODUCT";

export function setThemeAction(payload: IStore["theme"]): IAction {
    return { type: SET_THEME, payload };
}

export function setCategoriesAction(payload: IStore["categories"]): IAction {
    return { type: SET_CATEGORIES, payload };
}

export function setProductsAction(payload: IStore["products"]): IAction {
    return { type: SET_PRODUCTS, payload };
}

export function selectProductAction(payload: IStore["selectedProduct"]): IAction {
    return { type: SELECT_PRODUCT, payload };
}

export function setMobileAction(payload: IStore["isMobile"]): IAction {
    return { type: SET_MOBILE, payload };
}
