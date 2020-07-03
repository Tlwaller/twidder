import React from "react";
import "./App.css";
import Routes from "./Routes";
import Nav from './Components/Nav';
import "./Styles/Main.scss";

function App() {
    return (
        <div className="App">
        <Nav/>
        <div className="routes">{Routes}</div>
        </div>
    )
}

export default App;
