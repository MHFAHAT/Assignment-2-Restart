 ## React Basics

### 1) What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax that lets us write HTML-like code inside JavaScript. It makes UI code easier to read and write in React by combining markup and logic in one place.

### 2) Difference between State and Props
- State is used to store data that can change within a component.
- Props are used to pass data from a parent component to a child component. Props are read-only.

### 3) What is the useState hook, and how does it work?
useState is a React Hook that lets functional components store and update state. It returns a state value and a function to update that value. When the state changes, the component re-renders.

### 4) How can you share state between components in React?
State is usually stored in a parent component and passed to child components using props. This is called lifting state up.

### 5) How is event handling done in React?
Event handling is done using event attributes like onClick, onChange, etc., and assigning them a function to run when the event occurs.