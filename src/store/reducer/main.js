import { MainAction } from '../action/main'

const INITIAL_STATE = {
    isLogout: false,
    isLogin: true
}

export var Main = (INITIAL_STATE, action) => {
    switch (action.type) {
        case MainAction.signout:
            return {
                ...state, isLogin: true, isLogout: false
            }
    }
}