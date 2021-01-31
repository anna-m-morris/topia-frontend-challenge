import "./App.css";
import React,{ useState } from 'react';
import { Modal } from "./components/Modal"
import { ModalContext } from "./Contexts/ModalContext"
import { PositionContext } from "./Contexts/PositionContext"

function App() {
  const [active, setActive] = useState(false)

  const launchModal = (event) => {
    setActive(true)
  };

  const [size, setSize] = useState({ height: window.screen.height, width: window.screen.width })

  const [coordinates, setCoordinates] = useState({
    x: 800,
    y: 400
})

  return (
    <PositionContext.Provider value={{coordinates,setCoordinates}}>
    <ModalContext.Provider value={{ size, setSize }}>
      <div className="App">
        <button className={JSON.stringify(active)} onClick={launchModal}>Launch Topia Challenge</button>
        <Modal className={JSON.stringify(active)} active={active} setActive={setActive}/>
      </div>
    </ModalContext.Provider>
    </PositionContext.Provider>
  );
}

export default App;
