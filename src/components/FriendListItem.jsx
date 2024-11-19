import clsx from 'clsx';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={clsx(styles.friendItem)}>
            <img src={avatar} alt="Avatar" className={clsx(styles.avatar)} />
            <p className={clsx(styles.friendName)}>{name}</p>
            <p className={clsx(styles.status, { [styles.online]: isOnline, [styles.offline]: !isOnline })}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

export default FriendListItem;