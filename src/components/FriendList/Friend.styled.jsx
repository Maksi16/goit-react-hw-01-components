import styled from 'styled-components';

function isOnline({ isOnline }) {
  return isOnline ? '#00ff33' : '#ff0000';
}

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: white;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${isOnline};
  margin-right: 8px;
  margin-left: 8px;
`;

export const Avatar = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
