import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 350px;
  border: none;
  margin-bottom: 24px;
  border-collapse: separate;
  margin-left: auto;
  margin-right: auto;
`;

export const Thead = styled.thead``;
export const Th = styled.th`
  table thead & {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #ededed;
    font-size: 14px;
    border-top: 1px solid #ddd;
  }
  table thead tr &:first-child {
    border-radius: 20px 0 0 0;
  }
  table thead tr &:last-child {
    border-radius: 0 20px 0 0;
  }
`;
export const Tr = styled.tr``;
export const Tbody = styled.tbody`
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
`;
