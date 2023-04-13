import classes from "./MyMap.module.scss"
import img from "../img/bean_map.png"

const MyMap = (props:MapProps)=>{

    //TODO add pins
    const pins=[
            { name: "Area A", x: 100, y: 100, r: 25 },
            { name: "Area B", x: 300, y: 300, r: 25 },
    ];

    const handleAreaClick = (area: any)=>{
        console.log(`You clicked on area ${area.name}`);
    }
    return(
        <div className={classes.Container}>
            <img className={classes.Image}
                 alt={"Coffee_map"} src={img}
                 width={1000} height={560}
                 useMap={"#picture-map"}
                 onDragStart={e=>{e.preventDefault()}}
            />
            <map className={classes.Map} name={"picture-map"}>
                {pins.map((pin, index) => (
                    <area
                        key={index}
                        className={classes.Pin}
                        shape="circle"
                        coords={`${pin.x},${pin.y},${pin.r}`}
                        alt={pin.name}
                        data-name={pin.name}
                        onClick={() => handleAreaClick({ name: pin.name })}
                    />))}
            </map>
        </div>
    )
}
export default MyMap;
interface MapProps{

}