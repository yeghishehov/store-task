import { CategoriesType, IProduct } from "src/api/config";
import { THEME_DARK, THEME_LIGHT } from "src/utils/constants";

export interface IStore {
    theme: typeof THEME_DARK | typeof THEME_LIGHT;
    categories: CategoriesType;
    products: IProduct[];
    selectedProduct: string | number | null;
    isMobile: boolean;
}
export const initialStore: IStore = {
    theme: THEME_LIGHT,
    categories: [""],
    products: [],
    selectedProduct: null,
    isMobile: false,
};
