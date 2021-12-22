import React from "react";

const Context = React.createContext();

function AppProvider(props){

    const [currentColor, setCurrentColor] = React.useState();

    return(
        <Context.Provider value={{
            currentColor,
            setCurrentColor
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, AppProvider}