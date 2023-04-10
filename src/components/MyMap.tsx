import classes from "./MyMap.module.scss"
import {SyntheticEvent} from "react";
const MyMap = (props:MapProps)=>{
    const imgUrl = "https://i.pinimg.com/originals/6e/13/7b/6e137b8387bfd55e3746d5fe1027811c.jpg"

    const handleAreaClick = (area: any)=>{
        console.log(`You clicked on area ${area.name}`);
    }
    return(
        <div className={classes.Container}>
            <img className={classes.Map}
                 alt={"Coffee_map"} src={imgUrl}
                 width={800} height={600}
                 useMap={"#picture-map"}
                 onDragStart={e=>{e.preventDefault()}}
            />
            <map name={"picture-map"}>
                <area shape={"rect"}
                      coords="100,100,200,200"
                      alt="Area A"
                      onClick={() => handleAreaClick({ name: 'Area A' })}
                />
                <area
                    shape="rect"
                    coords="300,300,400,400"
                    alt="Area B"
                    onClick={() => handleAreaClick({ name: 'Area B' })}
                />
            </map>
        </div>
    )
}
export default MyMap;
interface MapProps{

}