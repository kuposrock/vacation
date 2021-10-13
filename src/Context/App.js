import React from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./ThemeContext";

function App() {

    return (
        <div>
          <ThemeContext.Provider value={"light"}>
            <Header />
            <Button />
          </ThemeContext.Provider>
        </div>
    )
}

export default App