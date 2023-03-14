import React from 'react';
import styles from './commentnickname.css';
import {EColor, Text} from '../../../../../Text';

interface ICommentNicknameProps {
    name: string,
    created: string,
    image?: string
}

export function CommentNickname(props: ICommentNicknameProps) {

    const {created, name, image} = props

    return (
        <div className={styles.content}>
            <img className={styles.content__image} src={image == undefined ? 'http://s1.iconbird.com/ico/2014/1/606/w512h5121390848145businessman512.png' : image} alt="avatar"/>
            <div className={styles.content__text}>
                <Text As='p' size={14} color={EColor.orange}>
                    {name}
                    <Text As='span' size={14} color={EColor.grey99}>
                        {created}
                    </Text>
                </Text>
            </div>
        </div>
    );
}
