import React from 'react';
import ReactDOM from 'react-dom';
// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
//
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

import Main from './container/main.js'
import StudentSignUp from './container/studentSignUp.js'
import StudentSignIn from './container/studentSignIn.js'
import Companyinfo from './container/companyinfo.js'
import Student from './container/student.js'
import ViewCompanies from './container/viewcompanies.js'
import ViewJobs from './container/viewjobs.js'
import Job from './container/postedjobs';
import Allstudent from './container/allstudent'
import Company from './container/company'
import Allstudents from './container/admin/allstudent';
import Allcompanies from './container/admin/allcompanies';
import Alljobs from './container/admin/alljobs';
import Admin from './container/admin/admin'


//student
import Studentinfo from './container/studentinfo.js'
// import { StudentInfoAction } from './store/action/studentinfo'

// import { CompanyInfoAction } from './store/action/companyinfo.js'



// store.dispatch(CompanyInfoAction.fetchingData());
// store.dispatch(StudentInfoAction.fetchingData());



ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route component={Main} path='/'>
          <IndexRoute component={StudentSignIn} />


          <Route path="SignUp" component={StudentSignUp}></Route>
        </Route>



        <Route path="/Student" component={Student}>  </Route>
        <Route path="/Studentinfo" component={Studentinfo}></Route>
        <Route path="/viewcompanies" component={ViewCompanies}></Route>
        <Route path="/viewjobs" component={ViewJobs}></Route>


        <Route path="/Company" component={Company}>  </Route>
        <Route path="/Companyinfo" component={Companyinfo}></Route>
        <Route path="/postedjobs" component={Job}></Route>
        <Route path="/allstudent" component={Allstudent}></Route>
        
        <Route path="/admin" component={Admin}></Route>        
        <Route path="/allcompanies" component={Allcompanies}></Route>
        <Route path="/alljobs" component={Alljobs}></Route>
        <Route path="/allstudents" component={Allstudents}></Route>        
        


      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
