![React Vault Logo](./public/logo.png)

# React Vault

**React Vault** is a secure web application built with React that allows users to store sensitive information such as passwords, credit card details, and notes. All data is encrypted using the AES (Advanced Encryption Standard) algorithm to ensure maximum security and privacy.

## Features

- **Secure Data Storage**: Save passwords, credit cards, and personal notes securely within your browser.
- **AES Encryption**: All data is encrypted with AES, ensuring that sensitive information remains protected even when stored locally.
- **Local Storage**: Data is saved in your browser's localStorage, so nothing is sent to external servers, ensuring complete control and privacy over your information.
- **Offline Availability**: Since no data is transferred over the internet, the app can be used offline.
- **Backup & Restore**: Easily back up your encrypted data and restore it when needed.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **AES Encryption**: For encrypting user data before saving it to localStorage.
- **JavaScript**: Core language for implementing functionality.

### Frameworks & Libraries

- [**crypto-js**](https://www.npmjs.com/package/crypto-js) – Used for AES encryption of user data.
- [**uuid**](https://www.npmjs.com/package/uuid) – For generating unique IDs for each saved item (passwords, credit cards, notes).
- [**zod**](https://www.npmjs.com/package/zod) – For schema validation of the data to ensure integrity and correctness.
- [**tailwindcss**](https://www.npmjs.com/package/tailwindcss) – Utility-first CSS framework for styling the user interface.

## How It Works

1. Users can input and save passwords, credit card details, and notes.
2. The data is encrypted using the AES algorithm before being stored in the browser's localStorage.
3. Since the data is stored locally, no information is sent to any server, making the app completely secure and private.
4. The app offers backup and restore functionality for encrypted data, ensuring users can keep a copy of their data safely.

## Installation

1. Clone the repository:

   ```bash
   https://github.com/kunalkhanx/react-vault.git
   ```
2. Navigate to the project directory:

    ```bash
    cd react-vault
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
    The app will be available at http://localhost:3000.

## License
This project is licensed under the MIT License.