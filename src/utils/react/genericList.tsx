import React, {ReactElement} from "react";

interface IItemListProps {
    id: string;
    text: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    svg?: ReactElement;
}

interface IGenericListProps {
    list: IItemListProps[]
}

const noop = () => {
}

export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'li', text, onClick = noop, className, id, href, svg}) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {svg}
                    {text}
                </As>
            ))}
        </>
    )
}