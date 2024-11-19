import clsx from 'clsx';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={clsx(styles.profile)}>
            <div>
                <img src={image} alt="User avatar" className={clsx(styles.avatar)} />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <div className={clsx(styles.stats)}>
                <div>
                    <span>Followers</span> <span>{stats.followers}</span>
                </div>
                <div>
                    <span>Views</span> <span>{stats.views}</span>
                </div>
                <div>
                    <span>Likes</span> <span>{stats.likes}</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;