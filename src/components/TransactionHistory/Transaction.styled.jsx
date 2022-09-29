import styled from 'styled-components';

export const TransactionItem = styled.tr`
  table tbody &:nth-child(even) {
    background: #ffffff;
  }
`;
export const Td = styled.td`
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
  .table tr th:first-child,
  .table tr &:first-child {
    border-left: 1px solid #ddd;
  }
  table tr th:last-child,
  .table tr &:last-child {
    border-right: 1px solid #ddd;
  }
  table tbody & {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  }
  table tbody tr:last-child & {
    border-bottom: 1px solid #bdbdbd;
  }
  table tbody tr:last-child &:first-child {
    border-radius: 0 0 0 20px;
  }
  table tbody tr:last-child &:last-child {
    border-radius: 0 0 20px 0;
  }
`;
