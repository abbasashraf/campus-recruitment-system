import { StudentInfoAction } from '../action/studentinfo.js';

const INITIAL_STATE = {
    push: false,
    data: [],
    getData: false
}
export var StudentInfo = (state = INITIAL_STATE , action) => {

    switch (action.type) {
        case StudentInfoAction.ADDDATA:
            return {
                ...state, push: true
            };
        case StudentInfoAction.GETDATA:
            return {
                ...state, getData: true, data: action.payload
            };
        default:
            return state

    }

}