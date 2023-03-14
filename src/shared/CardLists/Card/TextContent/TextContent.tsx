import React, {useContext} from 'react';
import styles from './textContent.css';
import {Title} from "./Title";
import {UserLink} from "./UserLink";

interface ITextContent {
    id: string,
    created?: React.ReactNode
    author?: React.ReactNode,
    avatar?: string,
    title?: React.ReactNode
}

export function TextContent({created, avatar, author, title, id}: ITextContent) {

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <UserLink avatar={avatar} author={author}/>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>
                    {created}
                </span>
            </div>
            <Title id={id} title={title}/>
        </div>
    );
}
