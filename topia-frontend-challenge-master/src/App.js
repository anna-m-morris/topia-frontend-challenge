import "./App.css";
import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { ModalContext } from "./Contexts/ModalContext";
import { PositionContext } from "./Contexts/PositionContext";
import { UsersContext } from "./Contexts/UsersContext";
import listUsersInView from "./utils/listUsersInView";
import { USER_LIST } from "./utils/constants";

function App() {
  const [active, setActive] = useState(false);

  const launchModal = (event) => {
    setActive(true);
    setUsers(
      listUsersInView(
        USER_LIST,
        coordinates.x,
        coordinates.y,
        size.height,
        size.width
      )
    );
  };

  //Modal Size default values
  const [size, setSize] = useState({
    height: window.screen.height,
    width: window.screen.width,
  });
  //Spawn Point
  const [coordinates, setCoordinates] = useState({
    x: 800,
    y: 400,
  });

  const [users, setUsers] = useState([]);

  return (
    <PositionContext.Provider value={{ coordinates, setCoordinates }}>
      <ModalContext.Provider value={{ size, setSize }}>
        <UsersContext.Provider value={{ users, setUsers }}>
          <div className="App">
            <button className={JSON.stringify(active)} onClick={launchModal}>
              Launch Topia Challenge
            </button>
            <Modal
              className={JSON.stringify(active)}
              active={active}
              setActive={setActive}
            />
          </div>
        </UsersContext.Provider>
      </ModalContext.Provider>
    </PositionContext.Provider>
  );
}

export default App;
