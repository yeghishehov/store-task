import classnames from "classnames";
import React from "react";

import { CardList } from "src/components/cardList";
import { Categories } from "src/components/categories";
import { Filter } from "src/components/filter";
import { Menu } from "src/components/menu";
import { ProductModal } from "src/components/productModal";
import { SearchBar } from "src/components/searchBar";
import { ThemeSwitcher } from "src/components/themeSwitcher";

import style from "./layout.pcss";

export const Layout: React.FC = () => {
    return (
        <div className={style.layout}>
            <div className={style.header}>
                <div className={classnames(style.container, style.container_top)}>
                    <SearchBar />
                    <Menu />
                </div>
                <div className={classnames(style.container, style.container_bottom)}>
                    <Categories />
                    <div className={classnames(style.container, style.container_filter)}>
                        <ThemeSwitcher />
                        <Filter />
                    </div>
                </div>
            </div>
            <div className={style.main}>
                <CardList />
            </div>
            <ProductModal />
        </div>
    );
};
