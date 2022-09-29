import PropTypes from 'prop-types';

import { TransactionItem, Td } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <TransactionItem>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TransactionItem>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
