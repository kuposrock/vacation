import React from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import {ThemeContextProvider} from "./ThemeContext"

function App() {

    return (
        <div>
          <ThemeContextProvider value={"light"}>
            <Header />
            <Button />
          </ThemeContextProvider>
        </div>
    )
}

export default App