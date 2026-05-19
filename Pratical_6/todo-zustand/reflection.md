# Reflection — Practical 6: Todo List Application with Zustand

## What I Learned

Before this practical, I had limited understanding of global state management
in React applications. I knew how to use `useState` for local component state,
but I did not fully understand how to share state across multiple components
without passing props through every level of the component tree.

Through this practical, I learned:

- How Zustand works as a global state management library
- How to create a store using the `create()` function that holds both
  state and actions in one place
- How to use selector functions to subscribe to only the specific
  piece of state a component needs
- How the `persist` middleware works to automatically save and load
  state from `localStorage`
- How to structure a React project with a dedicated `store/` folder
  separate from components


## What Went Well

Setting up the project with Vite was straightforward and much faster
than I expected. The Zustand store was surprisingly simple to write —
having state and actions in the same file made it easy to understand
how everything connects.

The hot module replacement (HMR) in Vite was very helpful during
development. Every time I saved a file, the browser updated instantly
without losing the current state of the app, which made testing much
faster.

The `persist` middleware was one of the most impressive features.
Adding just two extra lines of code — importing `persist` and wrapping
the store — made todos survive a full browser refresh with no additional
effort.


## Challenges Faced

**Understanding selectors:** At first I was confused about why we use
a selector function like `useTodoStore(state => state.todos)` instead
of just calling `useTodoStore()` and getting everything. After seeing
how it prevents unnecessary re-renders, it made sense — each component
only re-renders when the specific piece of state it subscribes to changes.

**Folder structure:** Creating the correct folder structure with
`components/` and `store/` subfolders before writing any code felt
unusual at first, but I quickly understood that this separation keeps
the codebase clean and maintainable.

**Immutable updates:** Understanding why we use methods like `.map()`,
`.filter()`, and the spread operator `...` instead of directly modifying
the array took some getting used to. Zustand requires immutable state
updates so it can detect what has changed and trigger the correct
re-renders.


## How It Compares to What I Knew Before

Previously, I would have solved this by lifting state up to a parent
component and passing everything down as props. For a small app this
works fine, but for larger applications this quickly becomes messy —
known as "prop drilling."

Zustand eliminates this completely. The `TodoItem` component can call
`removeTodo` directly from the store without the parent needing to pass
it down. This makes each component more independent and easier to
maintain.


## What I Would Do Differently

If I were to build this again, I would:

- Add input validation with error messages (e.g. warning when the user
  tries to add an empty todo)
- Add the ability to edit an existing todo instead of just deleting it
- Add filtering options to view All, Active, or Completed todos
  separately
- Add CSS styling to make the interface more user-friendly and visually
  appealing
- Write unit tests for the Zustand store actions to verify they work
  correctly


## Conclusion

This practical gave me a solid foundation in modern React state
management. Zustand's simplicity and low boilerplate make it an
excellent choice for managing shared state in React applications.
I now feel confident using Zustand in future projects and understanding
when global state management is needed versus local component state.

The most valuable takeaway was understanding that good state management
is not just about making the app work — it is about making the codebase
scalable, readable, and easy to maintain as the application grows.