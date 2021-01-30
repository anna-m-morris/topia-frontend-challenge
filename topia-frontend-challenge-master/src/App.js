import "./App.css";
import React, { useState } from 'react';
import { UserList } from "./components/UserList";

function App() {
  const [coordinates, setCoordinates] = useState({
    x: 800,
    y: 400
  })
  const [modal, setModal] = useState(false)

  const showModal = (event) => {
    console.log(coordinates)
    setModal(true)
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
      <label>X</label>
        <input
          name="x"
          type="number"
          defaultValue={coordinates.x}
          onChange={handleChanges}>
        </input>
        <label>Y</label>
        <input
          name="y"
          type="number"
          defaultValue={coordinates.y}
          onChange={handleChanges}
        ></input>
      </form>
        <button onClick={showModal}>User List</button>
      <UserList show={modal} />
    </div>
  );
}

export default App;
