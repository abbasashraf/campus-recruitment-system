import { studentSignUpAction } from '../action/studentSignUp';

const INITIAL_STATE = {
    isSignUp : false
}

export var studentSignUp = (state= INITIAL_STATE, action) => {
    switch (action.type){
        case studentSignUpAction.SIGN_UP_SUCCESS:
        return {
            ...state,
            isSignUp: true
        };
        case studentSignUpAction.SIGN_UP_UNSUCCESS:
        return {
            ...state,
            isSignUp: false
        };
        default: 
            return state
    }

}