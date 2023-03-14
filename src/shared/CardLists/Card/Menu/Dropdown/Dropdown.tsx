import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from "react-dom";

interface IDropdown {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {
}

export function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP, }: IDropdown) {

    const [isOpenDropDown, setIsOpenDropdown] = useState(isOpen)

    useEffect(() => setIsOpenDropdown(isOpen), [isOpen])
    useEffect(() => isOpenDropDown ? onOpen() : onClose(), [isOpenDropDown])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsOpenDropdown(!isOpenDropDown)
        }
    }

    const ref = useRef<HTMLDivElement>(null)

    const node = document.querySelector('#dropdown_root');
    if (!node) return null;

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                setIsOpenDropdown(false)
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);

    return (
        <div className={styles.container}>
            <div onClick={handleOpen} ref={ref}>
                {button}
            </div>
            {isOpenDropDown && ReactDOM.createPortal((
                <div
                    className={styles.listContainer}
                    style={{
                        top: (ref.current?.getBoundingClientRect().y || 0) + window.scrollY + 30,
                        left: (ref.current?.getBoundingClientRect().x || 0) + window.scrollX + 30,
                    }}
                >
                    <div className={styles.list} onClick={() => setIsOpenDropdown(false)}>
                        {children}
                    </div>
                </div>
            ), node
            )}
        </div>
    );
}
