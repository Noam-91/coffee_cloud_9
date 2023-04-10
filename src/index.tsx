import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {constants} from "./shared/appConstants";
import Login from "./auth/Login";
import {rootReducer} from "./reuducers/root.reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home/Home";
import Product from "./product/Product";
import Contact from "./contact/Contact";
import Profile from "./profile/Profile";
import Cart from "./cart/Cart";
import Blog from "./blog/Blog";
import {withGuard} from "./shared/HOCs/withGuard";

const root = document.getElementById('root') as HTMLElement;
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={constants.homeRoute} component={Home}/>
                    <Route path={constants.productRoute} component={Product}/>
                    <Route path={constants.blogRoute} component={Blog}/>
                    <Route path={constants.contactRoute} component={Contact}/>
                    <Route path={constants.cartRoute} component={withGuard(Cart)}/>
                    <Route path={constants.profileRoute} component={withGuard(Profile)}/>
                    <Route path={constants.loginRoute} component={Login}/>
                    <Redirect to={constants.homeRoute}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    root
);
