import React, {Component} from 'react';
import {Header} from "./header/Header";
import classes from "./App.module.scss";
import Footer from "./footer/Footer";
import {connect} from "react-redux";
import {checkLogin} from "./actions/auth.action";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {constants} from "./shared/appConstants";
import {deepOrange, grey, orange} from "@mui/material/colors";



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // palette values for dark mode
        primary: orange,
        divider: orange[700],
        background: {
            default: constants.backgroundColor,
            paper: constants.backgroundColor,
        },
        text: {
            primary: '#fff',
            secondary: grey[500],
        },
    },
});

class App extends Component<Props, any>{

    // componentDidMount() {
    //     this.props.checkLogin();
    // }



  render(){
    return (
        <ThemeProvider theme={darkTheme}>
            <Header history={this.props.history} match={this.props.match} location={this.props.location}/>
            <main className={classes.landingPage}> {this.props.children} </main>
            <Footer/>
        </ThemeProvider>
    );
  }
}

// export default connect(null, {checkLogin})(App);
export default withRouter(App);
interface Props  extends RouteComponentProps{}