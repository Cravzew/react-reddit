import React from 'react';
import styles from './menuitemlist.css';
import {EColor, Text} from "../../../../../Text";
import {EIcons, Icon} from "../../../../../Icon";

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemList({postId}: IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>

            <li className={styles.menuItem}>
                <Icon name={EIcons.comment} size={14}/>
                <Text size={12} color={EColor.grey99}>Комментарии</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem}>
                <Icon name={EIcons.share} size={14}/>
                <Text size={12} color={EColor.grey99}>Поделиться</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem}>
                <Icon name={EIcons.hide} size={14}/>
                <Text size={12} color={EColor.grey99}>Скрыть</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem}>
                <Icon name={EIcons.save} size={14}/>
                <Text size={12} color={EColor.grey99}>Сохранить</Text>
            </li>

            <div className={styles.divider}/>

            <li className={styles.menuItem}>
                <Icon name={EIcons.report} size={14}/>
                <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    );
}
