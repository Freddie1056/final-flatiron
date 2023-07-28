// App.js
import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:8001";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // Fetch transactions from the server
  useEffect(() => {
    fetch(`${API_BASE_URL}/transactions`)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  // Handle form submission to add a new transaction (frontend only)
  const handleAddTransaction = (event) => {
    event.preventDefault();

    // Create a new transaction object
    const newTransaction = {
      id: transactions.length + 1, // Generate a unique ID (replace this with a proper ID generation method if needed)
      description,
      amount: parseFloat(amount),
      category,
    };

    // Add the new transaction to the transactions state
    setTransactions([...transactions, newTransaction]);

    // Clear the form input fields
    setDescription("");
    setAmount("");
    setCategory("");
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My Bank Transactions</h1>
      <form onSubmit={handleAddTransaction}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
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
