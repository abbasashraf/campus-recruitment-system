
import React, { Component } from 'react';
import { studentSignUpAction } from '../store/action/studentSignUp';
import { TextField, Paper, RaisedButton, } from "material-ui";

import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        isSignUp: state.isSignUp
    }
}

// const styles = {
//     block: {
//         maxWidth: 250,
//     },
//     radioButton: {
//         marginBottom: 0,
//     },
// };

class StudentSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    handleStudentSinUp() {
        var credentials = {};
        credentials.nam = this.refs.name.getValue();
        credentials.email = this.refs.email.getValue();
        credentials.password = this.refs.pass.getValue();
        credentials.type = this.state.type;
        this.props.dispatch(studentSignUpAction.StudentSignUp(credentials))
      //  console.log(credentials);

    }
    UserTypeSet(event) {
        
        this.setState({
            type: event.target.value
        })
       
        
    }
    render() {

       //  console.log(this.state.type);
        return (<div>


            <div
                style={{
                    height: "200px",
                    width: "600px",
                    margin: "20px auto",
                    textAlign: "center"
                }}>
                <Paper zDepth={3} >

                    <h2 style={{ backgroundColor: "#00BCD4", height: "50px", margin: "0px", paddingTop: "20px", color: "white" }}>SignUp</h2>
                    <div style={{ padding: "10px", }}>
                        <TextField floatingLabelText="Name" ref="name" fullWidth={true} />
                        <br />
                        <TextField floatingLabelText="Email" ref="email" fullWidth={true} />
                        <br />
                        <TextField
                            floatingLabelText="Password"
                            ref="pass"
                            type="password"
                            fullWidth={true} />
                        <br />
                        <br/>
                        <div className="radioButton" onChange={this.UserTypeSet.bind(this)}>
                            <input type="radio" value="student" name="type" /> Student
                           <input type="radio" value="company" name="type" /> Company
                        </div>

                        <br/>


                        {/*<div >
                        <RadioButtonGroup onChange={this.UserTypeSet.bind(this)} name="shipSpeed" defaultSelected="student" >
                        <RadioButton
                            value="student"
                            label="Student"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="company"
                            label="Comapny"
                            style={styles.radioButton}
                        />
                        </RadioButtonGroup>
                        </div>*/}

                        <RaisedButton
                            fullWidth={true}
                            onClick={
                                this.handleStudentSinUp.bind(this)
                            }


                        >SignUp</RaisedButton>
                    </div>
                </Paper>
            </div>
        </div>
        );
    }

};


export default connect(mapStateToProps)(StudentSignUp);