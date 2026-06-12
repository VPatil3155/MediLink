# MediLink


Login for user 
username :-demo@mail.com
password :-123456

# MediLink - Medical Supply Chain Management System

MediLink is a role-based MERN stack application that connects **Wholesalers** and **Retailers** in a medical supply chain. The platform allows wholesalers to manage medicines and incoming orders while retailers can browse medicines and place orders.

---

## Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Protected routes
- Secure API endpoints

### Retailer Features
- View available medicines
- Check medicine details
  - Name
  - Price
  - Stock
  - Wholesaler
- Place medicine orders
- Quantity selection during ordering

### Wholesaler Features
- Add new medicines
- View incoming orders
- Accept orders
- Reject orders
- Manage medicine inventory

### General Features
- Responsive dashboard layout
- Role-based sidebar navigation
- Centralized API handling using Axios
- MongoDB database integration

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MongoDB
- Mongoose

---

## Project Structure

```text
Medilink/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── styles/
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Database Models

### User

```js
{
  name,
  email,
  password,
  role
}
```

### Medicine

```js
{
  name,
  price,
  stock,
  wholesaler
}
```

### Order

```js
{
  retailer,
  wholesaler,
  medicine,
  quantity,
  status
}
```

---

## API Endpoints

### Authentication

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

---

### Medicines

#### Get Medicines

```http
GET /api/medicines
```

#### Add Medicine

```http
POST /api/medicines
```

---

### Orders

#### Place Order

```http
POST /api/orders
```

#### Get Wholesaler Orders

```http
GET /api/orders/wholesaler
```

#### Update Order Status

```http
PATCH /api/orders/:id
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/medilink.git
cd medilink
```

---

### Backend Setup

```bash
cd server

npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start Backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client

npm install

npm start
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

## Current Implementation Status

### Completed
- User Authentication
- JWT Authorization
- Role-Based Routing
- Retailer Dashboard
- Wholesaler Dashboard
- Medicine Management
- Order Placement
- Order Acceptance/Rejection
- MongoDB Integration
- Shared Layout Components

### In Progress
- Stock Update After Order Acceptance
- Out-of-Stock Handling
- Order History Module
- Dashboard Auto Refresh
- UI Enhancements

---

## Future Improvements

- Inventory Analytics
- Order History Tracking
- Notifications
- Email Alerts
- Admin Dashboard
- Medicine Search & Filters
- Real-time Updates

---

## Screenshots

Add screenshots here after deployment.

```text
screenshots/login.png
screenshots/retailer-dashboard.png
screenshots/wholesaler-dashboard.png
```

---

## Learning Objectives

This project was built to practice:

- MERN Stack Development
- REST API Design
- JWT Authentication
- Role-Based Access Control
- MongoDB Relationships
- React State Management
- Full Stack Application Development

---

## Author

Nagesh Sutar

B.Tech Information Technology

MERN Stack & Full Stack Development Learning Project
