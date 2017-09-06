import React, { Component } from 'react';
import { connect } from 'react-redux';

import Company from './company';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { CompanyInfoAction } from '../store/action/companyinfo'
import firebase from '../firebase'
//import { PostedJobAction} from '../store/action/postedjobs'

class Companyinfo extends Component {

    //       componentWillMount() {
    //         this.props.dispatch(CompanyInfoAction.fetchingData());
    //         this.props.dispatch(StudentInfoAction.fetchingData());
    //   }



    handleCompanyInfo() {
        var userId = firebase.auth().currentUser.uid;
        var companyInfo = {};
        companyInfo.name = this.refs.name.getValue();
        companyInfo.jobtitle = this.refs.jobtitle.getValue();
        companyInfo.salary = this.refs.salary.getValue();
        companyInfo.jobdesc = this.refs.jobdesc.getValue();
        companyInfo.email = this.refs.email.getValue();
        companyInfo.Id = userId

       this.props.dispatch(CompanyInfoAction.addFirebase(companyInfo));
       //this.props.dispatch(PostedJobAction.addFirebase(companyInfo));
       

        //console.log(companyInfo, "companyInfo")
    }

    render() {
        return (
            <div>
                <Company />
                <div>
                    <div style={{
                        width: "600px",
                        margin: "50px auto",
                        lineHeight: "2em",
                        borderRadius: "20px"
                    }}>
                        <Paper zDepth={1} >
                            <h2 style={{ paddingLeft: "10px", backgroundColor: "#00BCD4", height: "50px", marginTop: "0px", paddingTop: "20px", color: "white" }}>Company job information</h2>

                            <div style={{ padding: "20px" }}>
                                <form>
                                    <TextField ref="name"
                                        hintText="Company Name"
                                        floatingLabelText="Company Name"
                                        type="text"
                                    /><br />
                                    <TextField ref="email"
                                        hintText="Email"
                                        floatingLabelText="Email"
                                        type="text"
                                    /><br />
                                    <TextField ref="jobtitle"
                                        hintText="Job Title"
                                        floatingLabelText="Job Title"
                                        type="text"
                                    /><br />
                                    <TextField ref="salary"
                                        hintText="Salary"
                                        floatingLabelText="Salary"
                                        type="text"
                                    />

                                    <TextField ref="jobdesc"
                                        hintText="Job Discription"
                                        floatingLabelText="Job Discription"
                                        type="text"
                                        fullWidth={true}
                                    />

                                    <br />
                                    <RaisedButton onClick={this.handleCompanyInfo.bind(this)} label="Update" primary={true} style={{ margin: "2px" }} />
                                </form>

                            </div>
                        </Paper>

                    </div>


                </div>

            </div>
        );
    }

};


export default connect()(Companyinfo);