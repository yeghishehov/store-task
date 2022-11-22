import { apiType } from "src/api";
import { IProduct } from "src/api/config";
import { IAction, setProductsAction } from "src/store/actions";

export class GetProducts {
    constructor(public dispatch: React.Dispatch<IAction>, public api: apiType) {
        this.all();
    }

    public async all() {
        const products = await this.api.getAllProducts();
        const action = setProductsAction(products);
        this.dispatch(action);
    }

    public async byCategory(category: IProduct["category"]) {
        const products = await this.api.getProductsByCategory(category);
        const action = setProductsAction(products);
        this.dispatch(action);
    }
}
