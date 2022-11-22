import React from "react";

import { API } from "src/api";
import { createServices, IServices } from "src/services/index";
import { IAction } from "src/store/actions";
import { reducer } from "src/store/reducers";
import { initialStore, IStore } from "src/store/store";

export interface IStoreAndServicesContext {
    store: IStore;
    dispatch: React.Dispatch<IAction>;
    services: IServices;
}

const StoreAndServicesContext = React.createContext({} as IStoreAndServicesContext);

export function useStoreAndServicesContext() {
    return React.useContext(StoreAndServicesContext);
}

export const StoreAndServicesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialStore);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const services = React.useMemo(() => createServices(dispatch, API), []);
    const value = { store, dispatch, services };
    return <StoreAndServicesContext.Provider value={value}>{children}</StoreAndServicesContext.Provider>;
};
