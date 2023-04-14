import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {SyntheticEvent} from "react";
import {ProductModel} from "../shared/models/ProductModel";
import {RouteComponentProps} from "react-router-dom";
import {constants} from "../shared/appConstants";
import classes from './ProductCard.module.scss'

const ProductCard = (props:ProductCardProps)=>{
    const redirectHandler=(event:SyntheticEvent)=>{
        const elem = event.target as HTMLDivElement
        // TODO: redirect to the specific product
        props.history.push(`${constants.productRoute}/{${elem.id}}`)
    }
    const addToCartHandler=()=>{
        // TODO: Add to Cart
    }

    return (
        <Card className={classes.Container} sx={{maxWidth:180, maxHeight:275, margin:5}} elevation={3}>
            <CardActionArea className={classes.ActionArea} onClick={redirectHandler} id={props.product.id}>
                <img className={classes.Image} alt={`${props.product.name}`} src={props.product.image}/>
                <CardContent className={classes.Content}>
                    <div className={classes.Name} >
                        {props.product.name}
                    </div>
                    <div className={classes.Price}>
                        {`$ ${props.product.price}`}
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions  className={classes.ActionArea}>
                <Button size="small" color="primary" onClick={addToCartHandler}>
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}

ProductCard.defaultProps={
    product:{
        id: "1",
        name: 'Crown Beverages Emperor\'s Finest Whole Bean Coffee 2lb. -5/Case',
        brand: 'Crown Beverages',
        price: "54.49",
        stock: "100",
        image:"https://cdnimg.webstaurantstore.com/images/products/large/88591/1936579.jpg",
        description:"With its full body, crispy acidity, and smooth finish this whole bean coffee is the perfect choice in the morning. Filled with natural antioxidants, coffee is a great beverage for your more health-conscious patrons. Keep your establishment fully stocked with this 2 lb bag of whole bean coffee. Perfect for a variety of classic coffee beverages, this coffee offers the versatility you need, with the convenience you deserve."
    }
}
export default ProductCard;
interface ProductCardProps extends RouteComponentProps{
    product: ProductModel;
}