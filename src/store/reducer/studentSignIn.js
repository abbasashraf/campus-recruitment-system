import { SigninAction } from '../action/studentSignIn.js';



const INITIAL_STATE = {
    isLogin: false,
    data:[],
}
export var SignInReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {

        case SigninAction.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
            };

        case SigninAction.LOGIN_UN_SUCCESS:
            return {
                ...state,
                isLogin: false
            };
            case SigninAction.GETUSERINFO:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
