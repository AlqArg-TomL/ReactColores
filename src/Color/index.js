import React from "react"
import { Context } from "../Context"
import "./Color.css"

function Color(props){


    const{
        currentColor,
        setCurrentColor
    } = React.useContext(Context);

    const onClick = (event) => {
        setCurrentColor(props.color)
    }

    return(
        <div 
        onClick={onClick}
        className={props.color+" Color"}
        >
            <p>{props.color}</p>
        </div>
    )
}


export {Color}