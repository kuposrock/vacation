import React, {Component} from "react"
import ThemeContext from "./ThemeContext"

class Button extends Component {
    render() {
        return (
            <button className="light-theme">Switch Theme</button>
        )    
    }
}

export default Button