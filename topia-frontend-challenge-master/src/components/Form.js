import React, { useContext } from "react";
import { ModalContext } from "../Contexts/ModalContext";
import { PositionContext } from "../Contexts/PositionContext";
import { UsersContext } from "../Contexts/UsersContext";
import listUsersInView from "../utils/listUsersInView";
import { USER_LIST } from "../utils/constants";
import "./form.css";

export function Form() {
  const { size, setSize } = useContext(ModalContext);
  const { setUsers } = useContext(UsersContext);
  const { coordinates, setCoordinates } = useContext(PositionContext);

  const handelScreenInput = (event) => {
    const newSize = event.target.name;
    setSize({
      ...size,
      [newSize]: Number(event.target.value),
    });
  };

  const handleCoordInput = (event) => {
    const newCoord = event.target.name;
    setCoordinates({
      ...coordinates,
      [newCoord]: Number(event.target.value),
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
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

  //// Doesn't work on first click yet
  // const goToCenter = (event) => {
  //   setSize({ height: 4000, width: 4000 });
  //   setCoordinates({ x: 2000, y: 2000 });

  //   setUsers(
  //     listUsersInView(
  //       USER_LIST,
  //       coordinates.x,
  //       coordinates.y,
  //       size.height,
  //       size.width
  //     )
  //   );
  // };

  return (
    <div className="Form">
      {/* <button onClick={goToCenter}>Go to center?</button> */}
      My Coordinates
      <form onSubmit={handelSubmit}>
        <label>X</label>
        <input
          name="x"
          type="number"
          defaultValue={coordinates.x}
          onChange={handleCoordInput}
        ></input>
        <label>Y</label>
        <input
          name="y"
          type="number"
          defaultValue={coordinates.y}
          onChange={handleCoordInput}
        ></input>
        <button type="submit">Travel</button>
      </form>
      Screen Size
      <form onSubmit={handelSubmit}>
        <label>Height</label>
        <input
          name="height"
          type="number"
          defaultValue={size.height}
          onChange={handelScreenInput}
        />
        <label>Width</label>
        <input
          name="width"
          type="number"
          defaultValue={size.width}
          onChange={handelScreenInput}
        />
        <button type="submit">Resize</button>
      </form>
    </div>
  );
}
