import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { MainAction } from '../store/action/main.js'
// material UI
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { FlatButton, AppBar, } from "material-ui";


function mstp(state) {
  return {
    login: state.SignInReducer,

  }
}

class Student extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  _signout(isLogin) {
    // var loginState = this.props.SignInReducer.isLogin;
    this.props.dispatch(MainAction.signout(this.props.login.isLogin));
    
  }


  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });


  render() {
   // console.log(this.props.login, "state of signn")
    //console.log(loginState, "ye wlai");
  //  console.log(this.props.login.data.type,"naam hai user ka")
    return (
      <div className="App">
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title={<span>Campus Recruitment System</span>}
          iconElementRight={<span><Link to="/"><FlatButton style={{color:"white"}} onClick={this._signout.bind(this)} label="Logout" /></Link></span>}
        />
        <div>
          <Drawer
            style={{}}
            docked={false}

            width={250}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >

          
            <img src={require("../images/User.png")} style={{ paddingTop: 60, marginLeft: 15, opacity: .5 }} alt="Smiley face" height="200" width="220" />

            <h2 style={{ backgroundColor: "#00BCD4", height: '50px', textAlign: "center", paddingTop: "14px" }}>
              {this.props.login.data.map((val,i)=>{
                return <div key={i}>{val.nam}</div>
              })}</h2>
            <Link to="/Studentinfo"><MenuItem onTouchTap={this.handleClose}>Edit Detail</MenuItem></Link>
            <Link to="/viewjobs"><MenuItem onTouchTap={this.handleClose}>View All Jobs</MenuItem></Link>
            <Link to="/viewcompanies"><MenuItem onTouchTap={this.handleClose}>View All Companies</MenuItem></Link>
          </Drawer>
        </div>

      </div>
    );
  }
}

export default connect(mstp)(Student);