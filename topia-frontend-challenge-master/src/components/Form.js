import React, { useContext, useState } from 'react';
import { ModalContext } from '../Contexts/ModalContext';

export function Form() {

    const { size, setSize } = useContext(ModalContext)

    const handelScreenResize = (event) => {
        const newSize = event.target.name
        setSize({
            ...size,
            [newSize]: event.target.value
        })
    }

    const [coordinates, setCoordinates] = useState({
        x: 800,
        y: 400
    })

    const handelCoordSubmit = (event) => {
        event.preventDefault()
        console.log(coordinates)
        //run algo
    }

    const handleCoordChanges = (event) => {
        const newCoord = event.target.name;
        setCoordinates({
            ...coordinates,
            [newCoord]: event.target.value
        })
    };

    return (
        <div className="Form">
            <form onSubmit={handelCoordSubmit}>My Coordinates
                <label >X</label>
                <input
                    name="x"
                    type="number"
                    defaultValue={coordinates.x}
                    onChange={handleCoordChanges}>
                </input>
                <label >Y</label>
                <input
                    name="y"
                    type="number"
                    defaultValue={coordinates.y}
                    onChange={handleCoordChanges}
                ></input>
                <button type="submit" >Travel</button>
            </form>
        </div>
    );
}
