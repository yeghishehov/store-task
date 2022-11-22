import React from "react";

import { Card } from "src/components/card";
import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";

import style from "./cardList.pcss";

export const CardList: React.FC = () => {
    const { store } = useStoreAndServicesContext();
    return (
        <div className={style.list}>
            {store.products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};
