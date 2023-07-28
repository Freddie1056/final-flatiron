// App.js
import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:8001";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch transactions from the server
  useEffect(() => {
    fetch(`${API_BASE_URL}/transactions`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  // Handle form submission to add a new transaction (frontend only)
  const handleAddTransaction = (event) => {
    event.preventDefault();
    // Here, you can create a new transaction object and add it to the transactions state.
    // Since the backend isn't involved, this new transaction won't be persisted.
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My Bank Transactions</h1>
      <form onSubmit={handleAddTransaction}>
        {/* Add your form inputs here */}
        {/* For example: */}
        <input type="text" name="description" placeholder="Description" />
        {/* <input type="number" name="amount" placeholder="Amount" /> */}
        <input type="text" name="category" placeholder="Category" />
        <button type="submit">Add Transaction</button> 
      </form>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

// TransactionTable component
function TransactionTable({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
