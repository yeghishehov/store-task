import { CategoriesType, IProduct, request } from "./config";

export const API = {
    getCategories: () => request<CategoriesType>("categories"),
    getAllProducts: () => request<IProduct[]>(""),
    getProduct: (product: string | number) => request<IProduct>(`${product}`),
    getProductsByCategory: (category: string) => request<IProduct[]>(`category/${category}`),
};

export type apiType = typeof API;
