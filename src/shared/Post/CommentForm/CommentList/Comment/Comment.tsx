import React from 'react';
import styles from './comment.css';
import {CommentNickname} from './CommentNickname';
import {CommentText} from './CommentText';
import {CommentControls} from './CommentControls';
import {CommentThreadline} from './CommentThreadline';
import {CommentList} from '../CommentList';
import {CommentForm} from "../../CommentForm";
import {CommentRepliesList} from "./CommentRepliesList";

interface ICommentProps {
    name: string,
    created: string,
    text: string,
    id: string,
    replies: boolean
    children?: React.ReactNode,
    image?: string
}

export function Comment(props: ICommentProps) {

    const {
        created, name, text, replies, children, image
    } = props

    return (
        <li className={styles.comment__box}>
            <CommentThreadline/>
            <div className={styles.comment__content}>
                <CommentNickname created={created} name={name} image={image}/>
                <CommentText text={text}/>
                <CommentControls name={name}/>
                {replies &&
                <CommentRepliesList>
                    {children}
                </CommentRepliesList>
                }
            </div>
        </li>
    );
}
