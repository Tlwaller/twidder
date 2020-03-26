import React from "react";
import "./App.css";
import Routes from "./Routes";
import Nav from './Components/Nav';
import "./Styles/Main.scss";

function App() {
    return (
        <>
        <Nav/>
        <div className="App">{Routes}</div>
        </>
    )
}

export default App;
