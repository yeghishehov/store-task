import React from "react";

import { IProduct } from "src/api/config";
import { Icon } from "src/components/Icon/Icon";
import { STAR_SVG } from "src/components/Icon/svgs";
import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";

import style from "./card.pcss";

interface IProps {
    product: IProduct;
}
export const Card: React.FC<IProps> = ({ product }) => {
    const { services } = useStoreAndServicesContext();

    const selectProductHandler = React.useCallback(() => {
        services.selectProduct.do(product.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const price = product.price.toString().split(".");

    return (
        <div className={style.card} onClick={selectProductHandler}>
            <img src={product.image} className={style.image} />
            <div className={style.title}>{product.title}</div>
            <div className={style.lineContainer}>
                <small className={style.currency}>CZK </small>
                <div className={style.price}>{price[0]}.</div>
                <small className={style.currency}>{price[1] || "00"}</small>
            </div>
            <div className={style.lineContainer}>
                <div className={style.rating}>{product.rating.count} sold</div>
                <div className={style.iconContainer}>
                    <Icon icon={STAR_SVG} />
                </div>
                <div className={style.rating}>{product.rating.rate}</div>
            </div>
        </div>
    );
};
