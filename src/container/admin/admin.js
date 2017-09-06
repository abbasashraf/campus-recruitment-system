import { Link } from 'react-router';
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { FlatButton, AppBar, } from "material-ui";
import { MainAction } from '../../store/action/main';



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    _signout(loginState) {
        // var loginState = this.props.SignInReducer.isLogin;
        this.props.dispatch(MainAction.signout(loginState));
      //  console.log(loginState, "ye wlai");
    }


    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });
    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleToggle}
                    title={<span>Campus Recruitment System</span>}
                    iconElementRight={<span><Link to="/"><FlatButton 
                    style={{color:"white"}} onClick={this._signout.bind(this)} label="Logout" /></Link></span>}
                />

                <div>
                    <Drawer
                        style={{}}
                        docked={false}

                        width={250}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}
                    >
                    
                    <img src={require("../../images/User.png")} style={{paddingTop:60,marginLeft:15,opacity: .5}} alt="Smiley face" height="200" width="220"/>
                        <h2 style={{ backgroundColor: "#00BCD4", height: '50px', textAlign: "center", paddingTop: "14px" }}>ADMIN</h2>
                        <Link to="/allstudents"><MenuItem onTouchTap={this.handleClose}>All Students</MenuItem></Link>
                        <Link to="/allcompanies"><MenuItem onTouchTap={this.handleClose}>All Companies</MenuItem></Link>
                        <Link to="/alljobs"><MenuItem onTouchTap={this.handleClose}>All jobs</MenuItem></Link>
                        
                        
                    </Drawer>
                </div>

            </div>
        );
    }

};


export default Admin;