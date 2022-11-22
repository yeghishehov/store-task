import { IAction, setThemeAction } from "src/store/actions";
import { THEME_STORAGE_KEY, THEME_DARK, THEME_LIGHT } from "src/utils/constants";

export class ThemeServices {
    constructor(public dispatch?: React.Dispatch<IAction>) {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultDark = storedTheme === THEME_DARK || (storedTheme === null && prefersDark);
        if (defaultDark) {
            this.toggleTheme(defaultDark);
        }
    }

    public toggleTheme(isDark: boolean) {
        const theme = isDark ? THEME_DARK : THEME_LIGHT;
        const action = setThemeAction(theme);

        this.dispatch?.(action);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        document.documentElement.setAttribute(THEME_STORAGE_KEY, theme);
    }
}
