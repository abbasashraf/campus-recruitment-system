import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StudentInfoAction } from "../store/action/studentinfo"
//import { MainAction } from '../store/action/main.js'
import Student from './student.js'

// material UI
import TextField from 'material-ui/TextField';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


class Studentinfo extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false,
            
        };
    }
    // _signout(loginState) {
    //     this.props.dispatch(MainAction.signout(loginState));
    //     console.log(loginState, "ye wlai");
    // }


    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });



    handleUpdate() {
        var studentinfo = {};
        studentinfo.name = this.refs.name.getValue();
        studentinfo.qualification = this.refs.qualification.getValue();
        studentinfo.cgpa = this.refs.cgpa.getValue();
        studentinfo.skills = this.refs.skills.getValue();
        studentinfo.overview = this.refs.overview.getValue();
    //    console.log(studentinfo);
        this.props.dispatch(StudentInfoAction.addFirebase(studentinfo));
        
    }





    render() {
        return (
            <div>
                <div>
                    <Student />
                </div>

                <div style={{
                    width: "600px",
                    margin: "50px auto",
                    lineHeight: "2em",
                    borderRadius: "20px"
                }}>
                    <Paper zDepth={1} >
                        <h2 style={{ paddingLeft: "10px", backgroundColor: "#00BCD4", height: "50px", marginTop: "0px", paddingTop: "20px", color: "white" }}>Student Information</h2>

                        <div style={{ padding: "20px" }}>
                            <form>

                                <TextField ref="name"
                                    hintText="Full Name"
                                    floatingLabelText="Full Name"
                                    type="text"
                                    defaultValue=""
                                /><br />
                                <TextField ref="qualification"
                                    hintText="Qualification"
                                    floatingLabelText="Qualification"
                                    type="text"
                                    defaultValue=""
                                    
                                /><br />
                                <TextField ref="cgpa"
                                    hintText="CGPA"
                                    floatingLabelText="CGPA"
                                    type="text"
                                />
                                <br />
                                <TextField ref="skills"
                                    hintText="Skills"
                                    floatingLabelText="Skills"
                                    type="text"
                                />
                                <br />

                                <TextField ref="overview"
                                    hintText="Overview"
                                    floatingLabelText="Overview"
                                    type="text"
                                    fullWidth={true}
                                />

                                <br />
                                <RaisedButton onClick={this.handleUpdate.bind(this)} label="Update" primary={true} style={{ margin: "2px" }} />
                            </form>

                        </div>
                    </Paper>

                </div>



            </div>

        );
    }

};


export default connect()(Studentinfo);