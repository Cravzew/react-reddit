import React from 'react';
import styles from './commentreplieslist.css';

export function CommentRepliesList({children}: {children: React.ReactNode}) {
    return (
        <ul>
          {children}
        </ul>
    );
}
