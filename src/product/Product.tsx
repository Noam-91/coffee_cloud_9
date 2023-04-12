import ColoredTabs from "../components/ColoredTabs";
import classes from "./Product.module.scss"
import MyMap from "../components/MyMap";

const Product = (props:ProductProps)=>{
    return (
        <div className={classes.Product}>
            <Banner/>
            <ColoredTabs/>
            {/*<MyMap/>*/}
        </div>
    )
}
export default Product;
interface ProductProps{
    
}

const Banner = (props:any)=>{
    return(
        <div className={classes.Banner}>
            <h1 style={{ fontFamily: 'Agraham' }}>Life </h1>
            <span style={{ fontFamily: 'Italiana' }}>Begins</span>
            <span style={{ fontFamily: 'Italiana' }}>After Coffee</span>
        </div>
    );
}