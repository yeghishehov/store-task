import { IAction, setMobileAction } from "src/store/actions";

export class SetMobile {
    constructor(public dispatch: React.Dispatch<IAction>) {
        this.do();
    }

    public do() {
        const isMobile = window.window.innerWidth < 905;
        const action = setMobileAction(isMobile);
        this.dispatch(action);
    }
}
