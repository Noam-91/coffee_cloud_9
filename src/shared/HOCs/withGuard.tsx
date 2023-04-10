import {ReduxStateModel} from "../models/redux-state.model";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {constants} from "../appConstants";

export const withGuard=(OldComponent:any)=>{
    const HOCComponent = (props:any)=>{
        const user = useSelector(
            (reduxState:ReduxStateModel)=>reduxState.user);
        useEffect(()=>{
            !user && props.history.push(constants.loginRoute);
        },[props.history, user])

        return (
            user ?
                <OldComponent {...props}/> :
                <div>loading...</div>
        );
    }
    return HOCComponent
}

