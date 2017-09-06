import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { MainAction } from '../store/action/main.js'
// material UI
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { FlatButton, AppBar, } from "material-ui";


//import Studentinfo from '../container/studentinfo';


function mstp(state) {
  return {
    login: state.SignInReducer,

  }
}

class Company extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  _signout(isLogin) {
    // var loginState = this.props.SignInReducer.isLogin;
    this.props.dispatch(MainAction.signout(this.props.login.isLogin));
   // console.log(loginState, "ye wlai");
  }


  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });


  render() {
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
              {this.props.login.data.map((val, i) => {
                return <div key={i}>{val.nam}</div>
              })}
            </h2>
            <Link to="/companyinfo"><MenuItem onTouchTap={this.handleClose}>Post A Job</MenuItem></Link>
            <Link to="/postedjobs"><MenuItem onTouchTap={this.handleClose}>My Posted Jobs</MenuItem></Link>
            <Link to="/allstudent"><MenuItem onTouchTap={this.handleClose}>All Student</MenuItem></Link>
          </Drawer>
        </div>

      </div>
    );
  }
}

export default connect(mstp)(Company);