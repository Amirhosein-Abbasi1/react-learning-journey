import React from "react";

/*
  React Props

  Props (short for Properties) are used to pass data from a parent component
  to a child component. They are read-only, meaning a child component should
  never modify the props it receives.
*/


// String Prop

function User({ name }) {
  return <h2>Name: {name}</h2>;
}

function StringProp() {
  return <User name="John" />;
}


// Number Prop

function Product({ price }) {
  return <h2>Price: ${price}</h2>;
}

function NumberProp() {
  return <Product price={99.99} />;
}


// Boolean Prop

function Status({ isOnline }) {
  return <h2>{isOnline ? "Online" : "Offline"}</h2>;
}

function BooleanProp() {
  return <Status isOnline={true} />;
}


// Array Prop

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  );
}

function ArrayProp() {
  return <UserList users={["John", "Alex", "Jane"]} />;
}


// Object Prop

function Profile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </>
  );
}

function ObjectProp() {
  return (
    <Profile
      user={{
        name: "John",
        age: 22,
      }}
    />
  );
}


// Function Prop

function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function FunctionProp() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <Button onClick={handleClick} />;
}


// Destructuring Props

function Welcome({ name, age, city }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </>
  );
}

function DestructuringProp() {
  return (
    <Welcome
      name="John"
      age={22}
      city="New York"
    />
  );
}


// Default Props

function Greeting({ name = "Guest" }) {
  return <h2>Hello, {name}</h2>;
}

function DefaultProp() {
  return <Greeting />;
}
