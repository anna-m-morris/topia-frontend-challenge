import "./App.css";
import React, { useContext, useState } from 'react';
import { Modal } from "./components/Modal"
import { ModalContext } from "./Contexts/ModalContext"

function App() {
  //is modal open;
  const [active, setActive] = useState(false)
  //define screen size to used with context becuse it will change two levels down
  const [size, setSize] = useState({ height: window.screen.height, width: window.screen.width })

  const launchModal = (event) => {
    setActive(true)
  };

  return (
    <ModalContext.Provider value={{ size, setSize }}>
      <div className="App">
        <button className={JSON.stringify(active)} onClick={launchModal}>Launch Topia Challenge</button>
        <Modal active={active} setActive={setActive} />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
