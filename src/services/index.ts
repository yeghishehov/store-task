import { apiType } from "src/api";
import { IAction } from "src/store/actions";

import { GetCategories } from "./getCategories";
import { GetProducts } from "./getProducts";
import { SelectProduct } from "./selectProduct";
import { SetMobile } from "./setMobile";
import { ThemeServices } from "./themeServices";

export interface IServices {
    readonly themeServices: ThemeServices;
    readonly getCategories: GetCategories;
    readonly getProducts: GetProducts;
    readonly selectProduct: SelectProduct;
    readonly setMobile: SetMobile;
}

export function createServices(dispatch: React.Dispatch<IAction>, api: apiType): IServices {
    return {
        themeServices: new ThemeServices(dispatch),
        getCategories: new GetCategories(dispatch, api),
        getProducts: new GetProducts(dispatch, api),
        selectProduct: new SelectProduct(dispatch),
        setMobile: new SetMobile(dispatch),
    };
}
