import React, {Component} from 'react';
import {Header} from "./header/Header";
import classes from "./App.module.scss";
import Footer from "./footer/Footer";
import {connect} from "react-redux";
import {checkLogin} from "./actions/auth.action";
import {RouteComponentProps, withRouter} from "react-router-dom";


interface Props  extends RouteComponentProps{}

class App extends Component<Props, any>{

    // componentDidMount() {
    //     this.props.checkLogin();
    // }

  render(){
    return (
        <>
            <Header history={this.props.history} match={this.props.match} location={this.props.location}/>
            <main className={classes.landingPage}> {this.props.children} </main>
            <Footer/>
        </>
    );
  }
}

// export default connect(null, {checkLogin})(App);
export default withRouter(App);