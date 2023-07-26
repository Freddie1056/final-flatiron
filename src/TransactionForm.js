import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, transactions }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID for the new transaction (You can use a library like 'uuid' for this)
    const newTransaction = {
      id: transactions.length + 1,
      description,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
