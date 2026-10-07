# User List – React & Axios

A React app that fetches a list of users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) using **axios**, with loading and error states, a search bar, and clickable user cards.
Made as a GoMyCode checkpoint.

## Features

- Fetches users with axios inside a `useEffect` hook
- Shows a loading message while the request is in progress
- Shows an error message if the request fails
- Displays each user's name, email, and company name
- Search input to filter users by name as you type
- Click a user card to show or hide their address, phone, and website

## Tech Stack

- React
- Vite
- Axios

## Project Structure

```
src/
├── UserList.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## State

| State         | Description                          |
| ------------- | ------------------------------------ |
| `listOfUsers` | The list of users from the API       |
| `loading`     | `true` while the request is running  |
| `error`       | The error message if the request fails |
| `search`      | The text typed in the search input   |
| `selectedId`  | The id of the user whose details are shown |

## Getting Started

```bash
git clone https://github.com/<your-username>/checkpoint-api.git
cd checkpoint-api
npm install
npm run dev
```

Then open the link shown in the terminal (usually `http://localhost:5173`).
