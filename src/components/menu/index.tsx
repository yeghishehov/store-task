import classnames from "classnames";
import React from "react";

import { Icon } from "src/components/Icon/Icon";
import { BURGER_SVG, CLOSE_SVG } from "src/components/Icon/svgs";
import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";

import style from "./menu.pcss";

const pages = ["About", "Categories", "Collection", "Best Sellers"];

export const Menu: React.FC = () => {
    const { store } = useStoreAndServicesContext();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = React.useCallback(() => {
        setIsOpen((state) => !state);
    }, []);

    return (
        <>
            {store.isMobile && (
                <div className={style.iconContainer} onClick={toggleOpen}>
                    <Icon icon={BURGER_SVG} />
                </div>
            )}
            {!store.isMobile && (
                <div className={style.listDesktop}>
                    {pages.map((page) => (
                        <a key={page} className={classnames(style.link, style.link_desktop)} href="#">
                            {page}
                        </a>
                    ))}
                </div>
            )}
            {isOpen && (
                <div className={style.background}>
                    <div className={classnames(style.iconContainer, style.closeIcon)} onClick={toggleOpen}>
                        <Icon icon={CLOSE_SVG} />
                    </div>
                    <div className={style.listWrapper}>
                        {pages.map((page) => (
                            <a key={page} className={style.link} href="#" onClick={toggleOpen}>
                                {page}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
