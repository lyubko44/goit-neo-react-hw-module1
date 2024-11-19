import './App.css';
import Profile from './Profile.jsx';
import FriendList from './FriendList.jsx';
import userData from '../userData.json';
import friends from '../friends.json';

const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
        </>
    );
};

export default App;