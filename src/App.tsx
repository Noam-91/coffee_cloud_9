import React, {Component} from 'react';
import {Header} from "./header/Header";
import classes from "./App.module.scss";
import Footer from "./footer/Footer";
import {connect} from "react-redux";
import {checkLogin} from "./actions/auth.action";


class App extends Component<any, any>{

    // componentDidMount() {
    //     this.props.checkLogin();
    // }

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

// export default connect(null, {checkLogin})(App);
export default App;