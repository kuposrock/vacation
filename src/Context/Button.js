import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"

function Button(props) {
    const context = useContext(ThemeContext)
    return (
        <button 
            onClick={context.toggleTheme} 
            className={`${context.theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button
