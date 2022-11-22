import React, { ChangeEvent } from "react";

import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";

import style from "./categories.pcss";

export const Categories: React.FC = () => {
    const { store, services } = useStoreAndServicesContext();

    const onSelectCategory = React.useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value;
        if (selectedCategory === "all") {
            services.getProducts.all();
        } else {
            services.getProducts.byCategory(selectedCategory);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={style.categoriesWrapper}>
            <select className={style.categories} defaultValue="none" onChange={onSelectCategory}>
                <option disabled value="none">
                    Select Category
                </option>
                <option value="all">All</option>
                {store.categories.map((category) => (
                    <option key={category} className={style.category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};
