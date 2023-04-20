import ColoredTabs from "../components/ColoredTabs";
import classes from "./Product.module.scss"
import {RouteComponentProps} from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Product = (props:ProductProps)=>{
    return (
        <div className={classes.Product}>
            <Banner/>
            <ColoredTabs/>
            <div className={classes.HorizontalScrollView}>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
                <ProductCard {...props}/>
            </div>
        </div>
    )
}
export default Product;
interface ProductProps extends RouteComponentProps{
    
}

const Banner = ()=>{
    return(
        <div className={classes.Banner}>
            <h1 style={{ fontFamily: 'Italiana' }}>Life </h1>
            <span style={{ fontFamily: 'Italiana' }}>Begins</span>
            <span style={{ fontFamily: 'Italiana' }}>After Coffee</span>
        </div>
    );
}