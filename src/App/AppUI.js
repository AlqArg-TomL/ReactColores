import React from "react"
import { ColorSelector } from "../ColorSelector"
import { ColorList } from "../ColorList"
import "./App.css"

function AppUI(){
    return(
        <React.Fragment>
            <div className="Parent">
                <ColorSelector/>
                <ColorList/>
            </div>
        </React.Fragment>
    )
}


export {AppUI}