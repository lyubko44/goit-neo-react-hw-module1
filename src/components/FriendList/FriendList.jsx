import clsx from 'clsx';
import styles from './FriendListItem.module.css';
import FriendListItem from './FriendListItem.jsx';

const FriendList = ({ friends }) => {
    return (
        <ul className={clsx(styles.friendList)}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;