import { PostedJobAction } from '../action/postedjobs';

const INITIAL_STATE = {
    push: false,
    data: [],
    getData: false,
}
export var postedJobs = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PostedJobAction.USERGETDATA:
            return {
                ...state, getData: true, data: action.payload
            };
        default:
            return state

    }


}