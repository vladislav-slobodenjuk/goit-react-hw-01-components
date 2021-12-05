import PropTypes from 'prop-types';

export const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status" data-is-online={friend.isOnline}></span>
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
