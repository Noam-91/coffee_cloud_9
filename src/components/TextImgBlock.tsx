import classes from "./TextImgBlock.module.scss"
import {Divider, Typography} from "@mui/material";
import {TextImageModel} from "../shared/models/TextImageModel";

const TextImgBlock = (props:TextImgBlockProps)=>{
    return (
        props.textLeft ?
        <div className={classes.Container}>
            <div>
                <Typography className={classes.Title} align={"left"} variant={"subtitle1"}>{props.article.title}</Typography>
                <Divider variant="middle" color={"white"} />
                <Typography className={classes.Body} align={"left"} variant={"body1"}>{props.article.description}</Typography>
            </div>
            <img className={classes.Image}
                 alt={`Img_${props.name}`} src={props.imgUrl}
                 width={props.imgSize.width} height={props.imgSize.height}
                 onDragStart={e=>{e.preventDefault()}}
            />
        </div>
        :
        <div className={classes.Container}>
            <img className={classes.Image}
                 alt={`Img_${props.name}`} src={props.imgUrl}
                 width={props.imgSize.width} height={props.imgSize.height}
                 onDragStart={e=>{e.preventDefault()}}
            />
            <div>
                <Typography className={classes.Title} align={"left"} variant={"subtitle1"}>{props.article.title}</Typography>
                <Divider variant="middle" color={"white"} />
                <Typography className={classes.Body} align={"left"} variant={"body1"}>{props.article.description}</Typography>
            </div>
        </div>
        )
};

TextImgBlock.defaultProps={
    imgSize:{width:"500px",height:"500px"},
    textLeft: true,
}

export default TextImgBlock;
interface TextImgBlockProps extends TextImageModel{
    imgSize:{width:string,height:string},
    textLeft: boolean,
}