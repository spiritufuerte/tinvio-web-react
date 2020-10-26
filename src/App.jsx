import React from 'react';
import './App.module.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import classes from './App.module.scss';
import linesCopy from "./assets/image/lines-copy-3.svg";
import boxesImage from './assets/image/Boxes.png';

export function App() {
    return (
        <div className="App">
            <div className={classes.linesWrapper}>
                <img src={linesCopy} alt="Lines Copy" title="Lines Copy"/>
            </div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
