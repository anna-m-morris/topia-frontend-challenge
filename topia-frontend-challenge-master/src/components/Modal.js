import React, { useContext, useState } from "react"
import { UserList } from "./UserList"
import { Form } from "./Form"
import { ModalContext } from "../Contexts/ModalContext"

export function Modal(props) {
    const {size} = useContext(ModalContext)

    const handleEscape = (event) => {
        props.setActive(false)
    }

    const modalStyle={
        height:JSON.stringify(size.height),
        width:JSON.stringify(size.width)
    }

    console.log(size)

    if (!props.active) { return (null) }
    else {
        return (
                <div className="modal" style={{height:size.height, width:size.width}}>
                    <button onClick={handleEscape}>Esc</button>
                    <UserList/>
                    <Form/>
                </div>
        )
    }
}