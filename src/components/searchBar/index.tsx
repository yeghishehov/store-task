import React from "react";

import style from "./searchBar.pcss";

export const SearchBar: React.FC = () => {
    const [value, setValue] = React.useState("");
    return (
        <input className={style.input} placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
    );
};
