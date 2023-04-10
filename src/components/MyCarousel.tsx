import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'
import classes from './MyCarousel.module.scss'
import {TextImageModel} from "../shared/models/TextImageModel";
import TextImgBlock from "./TextImgBlock";

const MyCarousel = (props:MyCarouselProps)=>{


    return (
        <Carousel className={classes.Container} animation={"fade"}>
            {
                props.items.map( (article, i) => <Item key={i} item={article} /> )
            }
        </Carousel>
    )
}

const Item = (props:any)=>{
    return (
        <Paper className={classes.Item} sx={{backgroundColor:"#101010", color:"#fff"}} >
            <TextImgBlock {...props.item} textLeft={false}></TextImgBlock>
        </Paper>
    )
}

export default MyCarousel;
interface MyCarouselProps {
    items: TextImageModel[];
}