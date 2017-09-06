import { CompanyInfoAction } from '../action/companyinfo.js';

const INITIAL_STATE = {
    push: false,
    data: [],
    getData: false,
}
export var CompanyInfo = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CompanyInfoAction.ADDDATA:
            return {
                ...state, push: true
            };
        case CompanyInfoAction.GETDATA:
            return {
                ...state, getData: true, data: action.payload
            };
        default:
            return state

    }


}