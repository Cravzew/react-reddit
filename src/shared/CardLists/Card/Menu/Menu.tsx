import React from 'react';
import styles from './menu.css';
import { Dropdown } from "./Dropdown";
import { MenuItemList } from "./Dropdown/MenuItemList";
import { EColor, Text } from "../../../Text";
import { EIcons, Icon } from "../../../Icon";

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <Icon name={EIcons.menu} size={16} />
                    </button>
                }>
                <div className={styles.dropdown}>
                    <MenuItemList postId={'1234'} />
                    <button className={styles.closeButton}>
                        <Text mobileSize={12} size={14} color={EColor.grey66}>
                            Закрыть
                        </Text>
                    </button>
                </div>
            </Dropdown>

        </div>
    );
}
