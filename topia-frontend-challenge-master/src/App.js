import "./App.css";
import React, { useState } from 'react';
import { UserList } from "./components/UserList";

function App() {
  const [coordinates, setCoordinates] = useState({
    x: 800,
    y: 400
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(coordinates)
  };

  const handleChanges = (event) => {
    const newCoord = event.target.name;
    setCoordinates({
      ...coordinates,
      [newCoord]: event.target.value
    })
  };

  return (
    <div className="App">
      <form>My Coordinates
      <lable>X</lable>
        <input
          name="x"
          type="number"
          defaultValue={coordinates.x}
          onChange={handleChanges}>
        </input>
        <lable>Y</lable>
        <input
          name="y"
          type="number"
          defaultValue={coordinates.y}
          onChange={handleChanges}
        ></input>
        <button onClick={handleSubmit}>User List</button>
      </form>
      <UserList />
    </div>
  );
}

export default App;
