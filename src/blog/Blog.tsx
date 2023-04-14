import MyMap from "../components/MyMap";
import {RouteComponentProps} from "react-router-dom";

const Blog = (props:BlogProps)=>{
    return (
        <div>
            <MyMap/>

        </div>
    )
}
export default Blog;
interface BlogProps extends RouteComponentProps{


}