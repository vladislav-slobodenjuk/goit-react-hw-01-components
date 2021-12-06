import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

export const FriendList = props => {
  return (
    <ul className={s.friendList}>
      {props.friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.online : s.offline}></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.prototypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
