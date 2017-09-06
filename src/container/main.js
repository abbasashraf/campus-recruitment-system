import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { FlatButton, AppBar, } from "material-ui";
import { MainAction } from '../store/action/main.js'
// import { CompanyInfoAction } from '../store/action/companyinfo'
// import { StudentInfoAction } from '../store/action/studentinfo'



function mstp(state) {
      return state
}
class Main extends Component {
      constructor(props) {
            super(props);
            this.state = { open: false };
      }
      // componentWillMount() {
      //       this.props.dispatch(CompanyInfoAction.fetchingData());
      //       this.props.dispatch(StudentInfoAction.fetchingData());
      // }

      componentDidMount() {
            var loginState = this.props.SignInReducer.isLogin;
          //  console.log(loginState, "thghghgfgfgfgfis")
            this.props.dispatch(MainAction.checkLogin(loginState));
      }

      handleToggle = () => {
            if (this.props.SignInReducer.isLogin) {
                  this.setState({ open: !this.state.open })
            }

            else {
                  this.setState({ open: this.state.open })
                  alert("please LogIn")

            }
      }


      handleClose = () => this.setState({ open: false });



      render() {
            return (
                  <div className="App">
                        <div>
                              <AppBar
                                    onLeftIconButtonTouchTap={this.handleToggle}
                                    title={<span>Campus Recruitment System</span>}
                                    iconElementRight={<span>
                                          <Link to="/"><FlatButton style={{color:"white"}} label="SignIn" /></Link>
                                          <Link to="/SignUp"><FlatButton style={{color:"white"}} label="Signup" /></Link></span>}
                              />
                        </div>

                        <div>
                        </div>
                        {this.props.children}

                  </div>
            );
      }

};


export default connect(mstp)(Main);