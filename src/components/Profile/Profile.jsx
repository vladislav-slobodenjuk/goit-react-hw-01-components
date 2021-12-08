import PropTypes from 'prop-types';
import s from './Profile.module.scss';

export const Profile = props => {
  const {
    username,
    tag,
    avatar,
    location,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={s.item}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={s.item}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};
