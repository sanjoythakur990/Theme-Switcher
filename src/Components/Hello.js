import React, {useContext, useEffect, useState} from "react";
import styleContext from "../context/styleContext";

const Hello=()=>{
    const {theme, lightTheme, darkTheme} = useContext(styleContext);
    const [isDark, setIsDark]= useState(false);

    // useEffect(()=>{
    //     let currentTheme = localStorage.getItem("isDark")
    //     setIsDark(currentTheme)
    // }, [])
    function switchTheme(){
        let currentTheme= !isDark;
        setIsDark(currentTheme);
        localStorage.setItem("isDark", currentTheme)
        if(!isDark){
            lightTheme()
        }
        else{
            darkTheme()
        }
    }
    return (
        <div>
            <div style={{...theme}}>
                <h1>Hello</h1>
                <p>lorejyt j uj4 ytjytejy  etjty je
                </p>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
                <hr />
            </div>
            <button onClick={switchTheme}>Switch Theme</button>
            {/* <button onClick={()=>{
                setTheme({
                    color: "white",
                    backgroundColor: "black",
                    border: "2px solid green"
                })
            }}>Switch to Dark Theme</button> */}
            <button onClick={darkTheme}>Dark Theme</button>
            <button onClick={lightTheme}>Light Theme</button>
        </div>
    )
}

export default Hello