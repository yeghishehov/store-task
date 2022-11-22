const baseURL = "https://fakestoreapi.com";
const basePath = "products";

interface IRating {
    rate: number | string;
    count: number | string;
}
export interface IProduct {
    id: number | string;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    rating: IRating;
}
export type CategoriesType = IProduct["category"][];

export async function request<T>(path: string, params?: object): Promise<T> {
    const url = new URL(basePath + "/" + path, baseURL);
    if (params) {
        Object.keys(params).forEach((key) => {
            url.searchParams.set(key, params[key]);
        });
    }
    return fetch(url).then((res) => res.json());
}
