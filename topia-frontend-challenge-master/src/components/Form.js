import React, { useContext, useState } from 'react';
import { ModalContext } from '../Contexts/ModalContext';

export function Form() {

    const { size, setSize } = useContext(ModalContext)

    const handelScreenInput = (event) => {
        const newSize = event.target.name
        setSize({
            ...size,
            [newSize]: event.target.value
        })
    }

    const handelScreenSubmit = (event) => {
        event.preventDefault()
        console.log(size)
        //run algo
    }

    const [coordinates, setCoordinates] = useState({
        x: 800,
        y: 400
    })

    const handleCoordChanges = (event) => {
        const newCoord = event.target.name;
        setCoordinates({
            ...coordinates,
            [newCoord]: event.target.value
        })
    };

    const handelCoordSubmit = (event) => {
        event.preventDefault()
        console.log(coordinates)
        //run algo
    }

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
            <form onSubmit={handelScreenSubmit}>Screen Size
                <label>Height</label>
                <input
                    name="height"
                    type="number"
                    defaultValue={size.height}
                    onChange={handelScreenInput} />
                <label>Width</label>
                <input
                    name="width"
                    type="number"
                    defaultValue={size.width}
                    onChange={handelScreenInput} />
                    <button type="submit">Resize</button>
            </form>
        </div>
    );
}
