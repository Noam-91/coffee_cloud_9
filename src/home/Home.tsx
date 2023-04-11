import {RouteComponentProps} from "react-router-dom";
import classes from './Home.module.scss'
import MyCarousel from "../components/MyCarousel";
import TextImgBlock from "../components/TextImgBlock";
import MyMap from "../components/MyMap";
import Grids from "../components/Grids";

const Home = (props:HomeProps)=>{
    const textImgContent= [
        {name: "Item 1",
        imgUrl: "https://static.wixstatic.com/media/cb3366_34a5ded414284baab5bb7757006ec276~mv2.jpg/v1/fit/w_2500,h_1330,al_c/cb3366_34a5ded414284baab5bb7757006ec276~mv2.jpg",
        article:{title:"Coffee beans",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }}
    ]
    const items = [
        {name:"Carousel 1",
        imgUrl:"https://cdn.shopify.com/s/files/1/0312/2897/articles/coffee_beans_800x.png?v=1648141678",
        article: {title: "Carousel 1",
            description: "Scelerisque purus semper eget duis. Ultricies integer quis auctor elit sed vulputate mi sit. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Interdum velit laoreet id donec ultrices tincidunt arcu. Porta nibh venenatis cras sed felis eget velit. In vitae turpis massa sed elementum tempus. Feugiat nisl pretium fusce id velit ut tortor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Sit amet purus gravida quis blandit turpis cursus. Pharetra magna ac placerat vestibulum lectus mauris."}}
        ,
        {name:"Carousel 2",
        imgUrl:"https://i.pinimg.com/564x/cf/e7/c2/cfe7c2c36f97df5e6b149ca63f41918a.jpg",
        article: {title: "Carousel 2",
            description: "Euismod in pellentesque massa placerat duis ultricies. Fermentum leo vel orci porta non. Phasellus faucibus scelerisque eleifend donec. Magna ac placerat vestibulum lectus. Luctus accumsan tortor posuere ac ut consequat semper. "}}
        ,
        {name:"Carousel 3",
        imgUrl:"https://coffeeclick.ie/wp-content/uploads/2021/07/white-coffee-cup-roasted-coffee-beans-around-1024x683.jpeg",
        article: {title: "Carousel 3",
            description: "Laoreet sit amet cursus sit amet dictum sit. Eget egestas purus viverra accumsan in nisl nisi. Netus et malesuada fames ac turpis egestas maecenas pharetra. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. A pellentesque sit amet porttitor eget dolor morbi non arcu. Donec enim diam vulputate ut pharetra sit amet. Pharetra vel turpis nunc eget lorem dolor. Pharetra vel turpis nunc eget lorem."}}
        ,
    ]

    return (
        <div className={classes.Home}>
            <div className={classes.TextImgBlocks}>
                {textImgContent.map((content)=>{
                    return (
                        <TextImgBlock key={content.name}{...content}/>
                    )
                })}
            </div>
            <MyCarousel items={items}/>
            <Grids/>
        </div>
    );
}

export default Home;
interface HomeProps extends RouteComponentProps{

}