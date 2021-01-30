import React, { useState } from "react"
import { UserList } from "./UserList"
import { Form } from "./Form"
import { ModalContext } from "../Contexts/ModalContext"

export function Modal(props) {
    const [size, setSize] = useState({ hight: window.screen.height, width: window.screen.width })

    const handleEscape = (event) => {
        props.setActive(false)
    }

    if (!props.active) { return (null) }
    else {
        return (
            <ModalContext.Provider value={{ size, setSize }}>
                <div>
                    <button className="esc" onClick={handleEscape}>Esc</button>
                    <UserList></UserList>
                    <Form></Form>
                </div>
            </ModalContext.Provider>
        )
    }
}