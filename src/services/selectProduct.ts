import { IAction, selectProductAction } from "src/store/actions";
import { IStore } from "src/store/store";

export class SelectProduct {
    constructor(public dispatch: React.Dispatch<IAction>) {}

    public do(productId?: IStore["selectedProduct"]) {
        const action = selectProductAction(productId || null);
        this.dispatch(action);
    }
}
