import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "./KarmaCounter";
import {CommentsButton} from "./CommentsButton";
import {SaveButton} from "./SaveButton";
import {ShareButton} from "./ShareButton";

interface IControlsProps {
    score?: number,
    numComments?: number
}

export function Controls({score, numComments}: IControlsProps) {
    return (
        <div className={styles.controls}>
            <KarmaCounter score={score}/>
            <CommentsButton numComments={numComments}/>
            <div className={styles.actions}>
                <ShareButton/>
                <SaveButton/>
            </div>
        </div>
    );
}
