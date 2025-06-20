# E-Commerce React/Redux Project

# Project Overview

This project is a modern e-commerce web application built with React and Redux Toolkit. It provides a complete shopping experience, including product browsing, detailed product pages, cart management, authentication, and an admin section.
The authentication system uses a fake login: based on the type of login (user or admin), admin can access either the standard user area or a reserved admin section in wich the application integrates with an external API for product data.
The project maintains a consistent, user-friendly interface.

# Running Instructions

1. **Start the development server:**
   npm run dev

2. **Open your browser:**
   Visit http://localhost:5173 to use the app.

## Features

- Product listing and detail pages
- Add to cart, update quantity, remove items
- Checkout process with address management
- User authentication (login, register)
- Admin login and admin section for product management
- Responsive and modern UI
- About and Contact pages
- Modal and popup management
- State management with Redux Toolkit
- Async operations managed with Redux Thunk (createAsyncThunk) to fetch products from an external API (https://fakestoreapi.com/products)

## Technologies Used

- **React** (with functional components and hooks)
- **Redux Toolkit** (for state management, including Thunk for async logic)
- **Vite** (for fast development and build)
- **JavaScript (ES6+)**
- **CSS** (custom styles)
