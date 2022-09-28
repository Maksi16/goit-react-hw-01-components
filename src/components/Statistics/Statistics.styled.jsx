import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
`;

export const Statistic = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background: white;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StatsItem = styled.li`
  display: grid;
  width: 100%;
  text-align: center;
  font-weight: 500;
  padding: 8px;
`;

export const Label = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
