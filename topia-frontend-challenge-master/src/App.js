import "./App.css";
import React, { useContext, useState } from 'react';
import { Modal } from "./components/Modal"

function App() {
  const [active, setActive] = useState(false)

  const launchModal = (event) => {
    setActive(true)
  };

  return (
    <div className="App">
      <button onClick={launchModal}>Launch Topia Challenge</button>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
