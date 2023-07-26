import React, { useState, useEffect } from 'react';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch data from JSON server and update state
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle search filter
  const handleSearch = (searchTerm) => {
    // Filter transactions based on the description
    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredTransactions;
  };

  return (
    <div>
      <h1>Flatiron Bank</h1>
      <TransactionForm addTransaction={addTransaction} transactions={transactions} />
      <SearchBar handleSearch={handleSearch} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default App;
