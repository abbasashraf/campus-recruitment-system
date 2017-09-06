import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { studentSignUp } from '../store/reducer/studentSignUp.js'
import { SignInReducer } from '../store/reducer/studentSignIn.js'
import { StudentInfo } from '../store/reducer/studentinfo.js'
import { CompanyInfo } from '../store/reducer/companyinfo.js'
import { postedJobs } from '../store/reducer/postedjobs.js'



const rootReducer = combineReducers({ studentSignUp, SignInReducer, StudentInfo, CompanyInfo, postedJobs })
const middle = applyMiddleware(thunk);

export const store = createStore(rootReducer, middle);

