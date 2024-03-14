import React, {useState} from "react";
import styleContext from "./styleContext";

const StyleProvider=(props)=>{
    const [theme, setTheme] = useState({
        color: "red",
        backgroundColor: "white",
        border: "1px solid black"
    });

    return (
        <styleContext.Provider value={{
            theme: theme, 
            lightTheme: ()=> setTheme({color: "red", backgroundColor: "white", border: "1px solid black"}),
            darkTheme: ()=> setTheme({color: "white", backgroundColor: "black", border: "2px solid green"})
            }
            }>
            {props.children}
        </styleContext.Provider>
    )
}

export default StyleProvider