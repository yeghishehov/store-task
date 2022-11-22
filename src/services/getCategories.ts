import { apiType } from "src/api";
import { IAction, setCategoriesAction } from "src/store/actions";

export class GetCategories {
    constructor(public dispatch: React.Dispatch<IAction>, public api: apiType) {
        this.do();
    }

    public async do() {
        const categories = await this.api.getCategories();
        const action = setCategoriesAction(categories);
        this.dispatch(action);
    }
}
