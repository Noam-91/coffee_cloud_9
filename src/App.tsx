import React, {Component} from 'react';
import {Header} from "./header/Header";
import classes from "./App.module.scss";
import Footer from "./footer/Footer";


class App extends Component<any, any>{

  render(){
    return (
        <>
            <Header/>
            <main className={classes.landingPage}> {this.props.children} </main>
            <Footer/>
        </>
    );
  }
}

export default App;
