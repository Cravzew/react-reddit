import React from 'react';
import styles from './commenttext.css';
import { Text } from '../../../../../Text';

export function CommentText({ text }: { text: string }) {
  return (
    <div className={styles.text}>
      <Text As='span' size={14}>
        {text}
      </Text>
    </div>
  );
}
