import React, {useContext} from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
    author?: React.ReactNode,
    avatar?: string
}

export function UserLink({author, avatar}: IUserLinkProps) {

    return (
        <div className={styles.userLink}>
            <img
                className={styles.avatar}
                src={avatar}
                alt="avatar"
            />
            <a href="#user-url" className={styles.username}>{author}</a>
        </div>
    );
}
