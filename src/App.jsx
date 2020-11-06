import React from 'react';
import './App.module.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import classes from './App.module.scss';
import linesCopy from "./assets/image/lines-copy-3.svg";
import lines from './assets/image/lines.svg';

export function App() {
    return (
        <div className="App">
            {/*<div className={classes.lines_wrapper}>
                <img src={linesCopy} alt="Lines Copy" title="Lines Copy"/>
            </div>
            <div className={classes.lines_reverse_wrapper}>
                <img src={lines} alt="Lines" title="Lines"/>
            </div>*/}
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
