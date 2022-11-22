import classnames from "classnames";
import React from "react";

import { Icon } from "src/components/Icon/Icon";
import { STAR_SVG } from "src/components/Icon/svgs";
import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";

import style from "./productModal.pcss";

export const ProductModal: React.FC = () => {
    const { store, services } = useStoreAndServicesContext();

    const closeHandler = React.useCallback(() => {
        services.selectProduct.do(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const product = store.products.find(({ id }) => id === store.selectedProduct);

    return (
        <div
            className={classnames(style.modal, {
                [style.modal_open]: Boolean(store.selectedProduct),
            })}
            onClick={closeHandler}
        >
            <div className={style.modalCard}>
                <img src={product?.image} className={style.image} />
                <div className={classnames(style.info, style.category)}>category: {product?.category}</div>
                <div className={style.title}>{product?.title}</div>
                <div className={classnames(style.info, style.description)}>{product?.description}</div>
                <div className={classnames(style.info, style.price)}>CZK {product?.price}</div>
                <div className={classnames(style.info, style.rating)}>Sold {product?.rating.count}</div>
                <div className={classnames(style.info, style.rating)}>
                    <div className={style.iconWrapper}>
                        <Icon icon={STAR_SVG} />
                    </div>
                    {product?.rating.rate}
                </div>
            </div>
        </div>
    );
};
