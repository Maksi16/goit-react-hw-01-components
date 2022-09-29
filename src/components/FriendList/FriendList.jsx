import { FriendBox } from './FriendList.styled';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const FriendList = ({ friends }) => {
  return (
    <FriendBox>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
