import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import classes from "./Footer.module.scss";
import {constants} from "../shared/appConstants";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const Footer = (props:FooterProps)=>{
    return (
        <footer className={classes.Footer}>
            <div className={classes.BodyContainer}>
                <div className={classes.Join}>
                    <h3>Join our newsletter</h3>
                    <p>Get updates on our latest coffee offerings and promotions.</p>
                </div>
                <form className={classes.Subscribe}>
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit">Subscribe</button>
                </form>
                <div className={classes.Social}>
                    <a href="#"><FacebookIcon/></a>
                    <a href="#"><TwitterIcon/></a>
                    <a href="#"><InstagramIcon/></a>
                </div>
            </div>
            <p>Copyright © Mercury 2023.</p>
        </footer>
    );
}

export default Footer;
interface FooterProps {
}