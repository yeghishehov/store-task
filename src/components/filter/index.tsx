import classnames from "classnames";
import React from "react";

import { Icon } from "src/components/Icon/Icon";
import { FILER_SVG } from "src/components/Icon/svgs";
import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";

import style from "./filter.pcss";

const filterTypes = ["date", "range", "time"];

export const Filter: React.FC = () => {
    const { store } = useStoreAndServicesContext();
    const [open, setOpen] = React.useState(false);
    return (
        <div className={style.filter}>
            {store.isMobile && (
                <div className={style.iconWrapper} onClick={() => setOpen((state) => !state)}>
                    <Icon icon={FILER_SVG} />
                </div>
            )}
            {store.isMobile && (
                <div className={classnames(style.filterPanels, { [style.filterPanels_open]: open })}>
                    {filterTypes.map((type) => (
                        <input key={type} type={type} />
                    ))}
                </div>
            )}
            {!store.isMobile && (
                <div className={style.filterPanels_desktop}>
                    {filterTypes.map((type) => (
                        <input key={type} type={type} />
                    ))}
                </div>
            )}
        </div>
    );
};
