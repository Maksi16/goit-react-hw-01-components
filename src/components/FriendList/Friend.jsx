import { FriendItem, Status, Avatar, Name } from './Friend.styled';
import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
