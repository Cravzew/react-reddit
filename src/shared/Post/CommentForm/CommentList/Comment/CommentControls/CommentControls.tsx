import React, {useState} from 'react';
import styles from './commentcontrols.css';
import {EIcons, Icon} from '../../../../../Icon';
import {EColor, Text} from '../../../../../Text';
import {CommentForm} from "../../../CommentForm";

export function CommentControls({name}: {name:string}) {

    const [answer, setAnswer] = useState(false)

    return (
        <div>
            <div className={styles.controls}>
                <button className={styles.controls__text} onClick={ () => setAnswer(true) }>
                    <Icon name={EIcons.comment} size={14}/>
                    <Text As='span' size={14} color={EColor.grey99}>Ответить</Text>
                </button>
                <button className={styles.controls__text}>
                    <Icon name={EIcons.share} size={14}/>
                    <Text As='span' size={14} color={EColor.grey99}>Поделить</Text>
                </button>
                <button className={styles.controls__text}>
                    <Icon name={EIcons.report} size={14}/>
                    <Text As='span' size={14} color={EColor.grey99}>Пожаловаться</Text>
                </button>
            </div>
            {answer &&
            <CommentForm name={name}/>
            }
        </div>
    );
}
