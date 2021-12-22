import React from "react"
import { Color } from "../Color"
import "./ColorList.css"

const colors = ["amarillo", "rojo", "azul", "verde"];

function ColorList(){
    return(
        <ul className="ColorList">
            <li>
                <Color
                    color = {colors[0]}
                />
            </li>
            <li>
                <Color
                    color = {colors[1]}
                />
            </li>
            <li>
                <Color
                    color = {colors[2]}
                />
            </li>
            <li>
                <Color
                    color = {colors[3]}
                />
            </li>
        </ul>
    )
}


export {ColorList}