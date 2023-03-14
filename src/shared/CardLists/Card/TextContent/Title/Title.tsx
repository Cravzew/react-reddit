import React from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";
import {Link} from "react-router-dom";

interface ITitleProps {
    id: string
    title?: React.ReactNode,
}

export function Title({title, id}: ITitleProps) {

    return (
        <h2 className={styles.title}>
            <Link to={`/posts/${id}`} className={styles.postLink}>
                {title}
            </Link>
        </h2>
    );
}
