import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  background-color: white;
  width: 250px;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.div;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding-bottom: 32px;
  padding-top: 32px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const Tag = styled.p`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 16px;
  opacity: 0.5;
`;

export const Location = styled.p`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 24px;
  opacity: 0.5;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: grid;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 8px;
  background: #e8e6e5;
`;
export const Label = styled.span`
  opacity: 0.5;
  margin-bottom: 4px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
