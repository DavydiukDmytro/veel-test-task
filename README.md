# Todo App with Next.js and JSONPlaceholder API

This is a simple Todo app built using **Next.js**, **Tailwind CSS**, **React Hooks**, and **React Query**. The app fetches a list of todos from the JSONPlaceholder API and allows users to create and delete todos with real-time UI updates.

## Features

- **Fetch todos** from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com).
- **Add a new todo**.
- **Delete a todo**.
- **Optimistic UI updates** to immediately show changes without waiting for the server response.
- Styled with **Tailwind CSS** for a clean and responsive design.
- API requests handled using **React Query** for efficient data fetching and caching.

## API Endpoints

- **Get Todos:** `GET https://jsonplaceholder.typicode.com/todos?_limit=10`
- **Create Todo:** `POST https://jsonplaceholder.typicode.com/todos`
- **Delete Todo:** `DELETE https://jsonplaceholder.typicode.com/todos/{id}`

## Technologies Used

- **Next.js** (React Framework)
- **Tailwind CSS** (CSS Framework)
- **React Hooks** (`useState`, `useEffect`)
- **React Query** (For managing API requests)
- **Axios** (For API requests)
