import React from 'react';
import './App.module.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import classes from './App.module.scss';

export function App() {
    return (
        <div className="App">
            <div className={classes.lines_wrapper}>
            </div>
            <div className={classes.lines_reverse_wrapper}>
            </div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
