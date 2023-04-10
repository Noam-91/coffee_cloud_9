import {Action} from "redux";
import {constants} from "../shared/appConstants";

export const authReducer = (state=null,action:authAction)=>{
    switch(action.type){
        case constants.LOGIN:
            return action.payload.data.success ?
                    action.payload.data.user :
                    state
        case constants.CHECK_LOGIN:
            return action.payload?.data.success ?
                    action.payload.data.user :
                    state
        case constants.LOGOUT:
            return action.payload;
    }
    return state
};
export interface authAction extends Action{
    payload: any;
}