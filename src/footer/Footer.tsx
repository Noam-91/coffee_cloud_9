import React, {SyntheticEvent, useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import classes from "./Footer.module.scss";
import {Button, Link} from "@mui/material";



const Footer = (props:FooterProps)=>{

    let [email,setEmail] = useState("");
    const inputChangeHandler=(event:SyntheticEvent)=>{
        const elem = event.target as HTMLInputElement;
        setEmail(elem.value);
    }
    const submitHandler = (event:SyntheticEvent)=>{
        event.preventDefault();
        // TODO
    }

    return (
        <footer className={classes.Footer}>
            <div className={classes.BodyContainer}>
                <div className={classes.Join}>
                    <h3>Join our newsletter</h3>
                    <p>Get updates on our latest coffee offerings and promotions.</p>
                </div>
                <form className={classes.Subscribe}>
                    <input type="email" placeholder="Enter your email" value={email} onChange={inputChangeHandler}/>
                    <Button type="submit" onSubmit={submitHandler}>Subscribe</Button>
                </form>
                <div className={classes.Social}>
                    <Link href="https://www.facebook.com/" ><FacebookIcon/></Link>
                    <Link href="https://twitter.com/"><TwitterIcon/></Link>
                    <Link href="https://www.instagram.com/"><InstagramIcon/></Link>
                </div>
            </div>
            <p>Copyright © Mercury 2023.</p>
        </footer>
    );
}

export default Footer;
interface FooterProps {
}