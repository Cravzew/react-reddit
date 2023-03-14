import React from 'react';
import styles from './card.css';
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { Controls } from "./Controls";
import { PostData } from "../../../../types/types";

export function Card(props: PostData) {

    const {
        id,
        author,
        score,
        num_comments,
        created,
        title,
        previewImage,
        avatar
    } = props

    return (
        <li className={styles.card}>
            <TextContent created={created} avatar={avatar} title={title} author={author} id={id}/>
            <Preview thumbnail={previewImage} />
            <Menu />
            <Controls numComments={num_comments} score={score} />
        </li>
    );
}
