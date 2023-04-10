import { NavLink } from "react-router-dom"
import {constants} from "../shared/appConstants";
import classes from './Header.module.scss';
import classNames from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {Avatar} from "@mui/material";

export const Header =(props:HeaderProps)=>{
    return (
            <header className={classes.Header}>
                <nav className="navbar navbar-dark navbar-expand-sm">
                    <Avatar className={classes.logo} alt={"Company_logo"} src={"https://start-page.buffer.com/cdn-cgi/image/width=194,height=194/https://buffer-start-page-uploads.s3.amazonaws.com/616c7a70608e1ecb61394c00/1634758238555.Logo%20no%20background.png"} sx={{ width: 50, height: 50 }}/>
                    <ul className={classNames("nav navbar-nav", classes.mainMenu)}>
                        <li className="nav-item">
                            <NavLink to={constants.homeRoute} className={classNames('nav-link', classes.navLink)} >Homepage</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={constants.productRoute} className={classNames('nav-link', classes.navLink)}>Our Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={constants.blogRoute} className={classNames('nav-link', classes.navLink)}>Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={constants.contactRoute} className={classNames('nav-link', classes.navLink)}>Contact</NavLink>
                        </li>
                    </ul>
                    <ul className={classNames("nav navbar-nav ms-auto",classes.rightMenu)}>
                        <li>
                            <NavLink to={constants.productRoute} className={classNames('nav-link', classes.navLink)}><SearchIcon/></NavLink>
                        </li>
                        <li>
                            <NavLink to={constants.cartRoute} className={classNames('nav-link', classes.navLink)}><ShoppingCartIcon/></NavLink>
                        </li>
                        <li>
                            <NavLink to={constants.profileRoute} className={classNames('nav-link', classes.navLink)}><PersonIcon/></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

interface HeaderProps{

}