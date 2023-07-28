
Deployed link:  https://dashing-pastelito-ca1a15.netlify.app/

# Flatiron Bank React App


Flatiron Bank is a simple React web application that allows users to manage transactions. The app fetches transaction data from a JSON server and displays it in a table. Users can add new transactions through a form and also filter transactions based on their descriptions.

## Features

- View a table of all transactions with ID, Description, and Amount columns.
- Add new transactions using a simple form.
- Filter transactions by typing into the search bar to see only the relevant results.

## Getting Started

To run the Flatiron Bank React app on your local machine, follow the steps below:

### Prerequisites

- Node.js and npm installed on your computer.

### Installation

1. Clone the repository to your local machine:

##git clone git@github.com:Freddie1056/final-flatiron.git
=======
bash
git clone git@github.com:Freddie1056/final-flatiron.git
>>>>>>> 3504e7d (final)
cd flatiron-bank-react

##Install the dependencies:

npm install

##Usage

    Start the JSON server to simulate the backend:

##npm run server

    In a separate terminal, start the React app:

##npm start

    Open your web browser and visit http://localhost:3000 to access the Flatiron Bank app.

##Adding Transactions

    Use the "Add Transaction" form to enter a description and an amount, then click the "Add Transaction" button to add a new transaction.

##Filtering Transactions

    Type into the search bar to filter transactions based on their descriptions. Only transactions containing the search term will be displayed.

##Project Structure

The project is organized as follows:

|-- public/
|-- src/
|   |-- Components/
|   |   |-- TransactionTable.js
|   |   |-- TransactionForm.js
|   |   |-- SearchBar.js
|   |-- App.js
|   |-- index.js
|-- package.json
|-- db.json
|-- README.md

public/: Contains the public files, including the HTML template.
src/: Contains the React application's source code.
        Components/: Contains the components used in the app, such as the TransactionTable, TransactionForm, and SearchBar components.
        App.js: The main component that renders the entire application.
        index.js: The entry point of the application.
    package.json: The package configuration file with project dependencies and scripts.
    db.json: A JSON file that simulates the backend and contains the initial transaction data.

Contributing

Contributions to the Flatiron Bank React app are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

##License

This project is licensed under the MIT License.
