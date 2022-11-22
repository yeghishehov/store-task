import React from "react";

import { useStoreAndServicesContext } from "src/context/storeAndServicesContext";
import { THEME_DARK } from "src/utils/constants";

import style from "./themeSwitcher.pcss";

export const ThemeSwitcher: React.FC = () => {
    const { store, services } = useStoreAndServicesContext();

    const onChangeTheme = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            services.themeServices.toggleTheme(e.target.checked);
        },
        [services.themeServices],
    );

    return (
        <label className={style.toggleTheme} htmlFor="checkboxTheme">
            <input
                type="checkbox"
                id="checkboxTheme"
                className={style.checkboxTheme}
                onChange={onChangeTheme}
                defaultChecked={store.theme === THEME_DARK}
            />
            <div className={style.slider}></div>
        </label>
    );
};
