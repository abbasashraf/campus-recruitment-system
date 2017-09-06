import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SigninAction } from '../store/action/studentSignIn'
import { TextField, Paper, RaisedButton } from "material-ui";
import { Link } from 'react-router'



function mapStateToProps(state) {
  return state
}


class StudentSignIn extends Component {

        

  studentHandleLogin() {

    var credentials = {};
    credentials.email = this.refs.email.getValue();
    credentials.password = this.refs.pass.getValue();
    this.props.dispatch(SigninAction.login(credentials));
  //  console.log(this.props.SignInReducer, "asdasdasd");
  }



  render() {
    return (
      <div>

        <div
          style={{
            width: "600px",
            margin: "50px auto",
            textAlign: "center",
            borderRadius: "20px"
          }}>
          <Paper zDepth={3} >

            <h2 style={{ backgroundColor: "#00BCD4", height: "50px", marginTop: "0px", paddingTop: "20px", color: "white" }}>Login</h2>
            <div style={{ padding: "10px" }}>
              <TextField floatingLabelText="Email" type="email" ref="email" fullWidth={true} defaultValue="abc@admin.com"/>
              <br />
              <TextField 
                floatingLabelText="Password"
                ref="pass"
                type="password"
                fullWidth={true} 
                defaultValue="123456"/>
              <br />
              <RaisedButton
                fullWidth={true}
                onClick={
                  this.studentHandleLogin.bind(this)
                }
              >Login</RaisedButton>
              <Link to="/SignUp"><p style={{ textAlign: "right" }}>Create Account</p></Link>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StudentSignIn);