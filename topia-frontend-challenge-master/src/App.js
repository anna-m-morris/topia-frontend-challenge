import "./App.css";
import React, { useContext, useState } from 'react';
import { UserList } from "./components/UserList";
import {Modal} from "./components/Modal"

function App() {
  const [modal, setModal] = useState(false)

  const launchModal = (event) => {
    setModal(true)
  };

  return (
    <div className="App">
      <button onClick={launchModal}>User List</button>
      <Modal show={modal}></Modal>
      <UserList show={modal} />
    </div>
  );
}

export default App;
