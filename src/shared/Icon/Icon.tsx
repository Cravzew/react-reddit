import React from 'react';
import styles from './icon.css';
import {
    CommentDropdownIcon,
    HideDropdownIcon,
    MenuDropdownIcon,
    ReportDropdownIcon,
    SaveDropdownIcon,
    ShareDropdownIcon
} from "../../../../react-deploy/src/shared/Icons";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10

export enum EIcons {
    menu = 'MenuDropdownIcon',
    comment = "CommentDropdownIcon",
    hide = "HideDropdownIcon",
    report = 'ReportDropdownIcon',
    save = 'SaveDropdownIcon',
    share = 'ShareDropdownIcon',
}

interface IIconProps {
    name: EIcons
    size: TSizes
}

export function Icon(props: IIconProps) {

    const {
        name,
        size,
    } = props

    switch (name) {
        case EIcons.menu:
            return (
                <MenuDropdownIcon size={size}/>
            );
        case EIcons.comment:
            return (
                <CommentDropdownIcon size={size}/>
            );
        case EIcons.hide:
            return (
                <HideDropdownIcon size={size}/>
            );
        case EIcons.report:
            return (
                <ReportDropdownIcon size={size}/>
            );
        case EIcons.save:
            return (
                <SaveDropdownIcon size={size}/>
            );
        case EIcons.share:
            return (
                <ShareDropdownIcon size={size}/>
            );
        default:
            return (
                <></>
            )
    }


}
