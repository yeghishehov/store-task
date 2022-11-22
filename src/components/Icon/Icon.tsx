import * as React from "react";

import style from "./styles.pcss";

interface IconProps {
    icon: string; // svg
    onClick?(): void;
}

export const Icon: React.FC<IconProps> = (props) => {
    return <div className={style.icon} onClick={props.onClick} dangerouslySetInnerHTML={{ __html: props.icon }} />;
};
