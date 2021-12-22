import React from "react"
import { Context } from "../Context"
import "./ColorSelector.css"


function ColorSelector(){

    const {
        currentColor,
        setCurrentColor
        } = React.useContext(Context);
    
    return(
        <div className="ColorSelector">
            <p>
                Selecciona un color
            </p>
            <div className={currentColor}>
                <p>El color seleccionado es: {currentColor}</p>
            </div>
        </div>
    )
}


export {ColorSelector}