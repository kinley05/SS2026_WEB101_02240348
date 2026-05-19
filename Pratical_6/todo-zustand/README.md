# Overview
A simple yet fully functional Todo List application built with React and Zustand for state management. This project demonstrates how Zustand simplifies global state management in React applications by eliminating prop drilling and reducing boilerplate code compared to Context API or Redux.

# Features
- Add new todo items
- Mark todos as complete/incomplete with a checkbox
- Delete individual todos
- Clear all completed todos at once
- Live count of total and completed todos
- Data persistence via localStorage — todos
- Hot module replacement during development via Vite

# Tech Stack
Technology         Purpose
React 18           UI component library
Zustand            Global state management
Vite               Build tool and dev server
JavaScript(ES6+)   Programming language
localStorage       Data persistence

# Project Structure 
todo-zustand/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx     
│   │   ├── TodoItem.jsx     
│   │   └── TodoList.jsx      
│   ├── store/
│   │   └── todoStore.js      
│   ├── App.jsx              
│   └── main.jsx             
├── public/
├── package.json
├── vite.config.js
└── README.md

# getting Started
Prerequisites
Make sure you have the following installed:
- Node.js (v16 or higher)
- npm (comes with Node.js)
- VS Code (recommended)

# Installation
1. Clone or download the project
bashgit clone <your-repo-url>
cd todo-zustand
2. Install dependencies
bashnpm install
3. Install Zustand
bashnpm install zustand
4. Start the development server
bashnpm run dev
5. Open in browser
http://localhost:5173

# How the Zustand Store Works
The entire application state lives in src/store/todoStore.js:

jsimport { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],                  // State

      addTodo: (text) => ...,     // Add a new todo
      toggleTodo: (id) => ...,    // Mark complete/incomplete
      removeTodo: (id) => ...,    // Delete a todo
      clearCompleted: () => ...,  // Remove all completed todos
    }),
    { name: 'todo-storage' }      // localStorage key
  )
)

## Accessing the store in any component:
jsx// Get state
const todos = useTodoStore((state) => state.todos)

// Get an action
const addTodo = useTodoStore((state) => state.addTodo)

# Component Breakdown
## TodoInput.jsx

Manages local input field state with useState
Calls addTodo from the Zustand store on form submit
Clears the input field after adding

## TodoItem.jsx

Receives a single todo object as a prop
Directly accesses toggleTodo and removeTodo from the store
Shows strikethrough text when todo is completed

## TodoList.jsx

Reads the full todos array from the store
Maps each todo to a TodoItem component
Shows the Clear Completed button when todos exist

## App.jsx

Computes todoCount and completedCount from the store
Renders TodoInput, stats, and TodoList

# Key Concepts Demonstrated
1. Store Creation
Using create() from Zustand to define state and actions together in one place.
2. Selectors
Components subscribe only to what they need:
jsxconst todos = useTodoStore((state) => state.todos)
This prevents unnecessary re-renders when unrelated state changes.
3. Immutable State Updates
Actions use set() to return new state without mutating the original:
jsxtodos: state.todos.filter(todo => todo.id !== id)
4. Persist Middleware
Wrapping the store with persist() automatically saves and loads state from localStorage.

# References

Zustand Documentation
Zustand GitHub
React Documentation
Vite Documentation