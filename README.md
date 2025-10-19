# Mini CRM - React Native Mobile App

A simple Customer Relationship Management (CRM) mobile app built using **React Native**, **Redux Toolkit**, and **React Navigation**.  
Users can register, login, manage customers, and manage leads per customer.

---

## Features

- **Authentication**
  - User registration
  - User login
  - Logout functionality

- **Dashboard**
  - Displays list of customers
  - Shows a message if no customers are available

- **Customer Management**
  - Add new customers (Name, Email, Phone)
  - Edit/Delete customers (optional)

- **Lead Management**
  - Add leads for each customer (Title, Description, Status)
  - View list of leads per customer

- **State Management**
  - Redux Toolkit stores customers and leads globally

- **UI**
  - Clean and mobile-friendly layout
  - Buttons, text inputs, and basic styling

---

## Tech Stack

- React Native (Expo)
- Redux Toolkit
- React Navigation
- AsyncStorage (optional for persistence)
- UUID for unique IDs

---

## Setup & Run

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mini-crm.git
cd mini-crm

2. Install dependencies:
npm install

3. Run the app with Expo:
npx expo start

4. Open on your phone using Expo Go and scan the QR code.
