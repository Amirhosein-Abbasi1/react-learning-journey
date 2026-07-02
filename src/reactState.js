import { useState } from "react";

/*
  React State (useState)

  useState is a React Hook that allows functional components
  to store and update data. Whenever the state changes,
  React automatically re-renders the component.
*/


// Basic State

function BasicState() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}


// String State

function StringState() {
  const [name, setName] = useState("John");

  return (
    <>
      <h2>{name}</h2>

      <button onClick={() => setName("Alex")}>
        Change Name
      </button>
    </>
  );
}


// Boolean State

function BooleanState() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>

      {isOpen && <p>Content is visible.</p>}
    </>
  );
}


// Array State

function ArrayState() {
  const [users, setUsers] = useState(["John", "Jane"]);

  function addUser() {
    // Always create a new array.
    setUsers([...users, "Alex"]);
  }

  return (
    <>
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}


// Object State

function ObjectState() {
  const [user, setUser] = useState({
    name: "John",
    age: 22,
  });

  function updateName() {
    // Copy the object before updating it.
    setUser({
      ...user,
      name: "Alex",
    });
  }

  return (
    <>
      <h2>{user.name}</h2>

      <button onClick={updateName}>
        Update Name
      </button>
    </>
  );
}

// Functional Update

function FunctionalUpdate() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      {count}
    </button>
  );
}