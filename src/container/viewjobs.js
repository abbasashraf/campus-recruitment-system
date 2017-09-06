
import React, { Component } from 'react';
import Student from './student.js'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from '../firebase'
import { CompanyInfoAction } from '../store/action/companyinfo'
//import { StudentInfoAction } from '../store/action/studentinfo'


function mapStateToProps(state) {
    return {
        dataList: state.CompanyInfo,
        datalist: state.StudentInfo
    }

}


class ViewJobs extends Component {
    constructor() {
        super();
        this.state = {
            key: [],
            keyy: [],
            open: false
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };



    componentWillMount() {

        this.props.dispatch(CompanyInfoAction.fetchingData());
        //  this.props.dispatch(StudentInfoAction.fetchingData());
        var getData = firebase.database().ref().child("USER/");
        getData.on('value', snap => {
            var userObj = snap.val();
            var key = Object.keys(userObj);
            this.setState({
                key
            })
        })

        var getDataa = firebase.database().ref().child("companydata/");
        getDataa.on('value', snap => {
            var userObj = snap.val();
            var keyy = Object.keys(userObj);
            this.setState({
                keyy
            })
        })
    }
    applyjob(i) {


        //    console.log("Current user " + currentUser)
        var currentId = firebase.auth().currentUser.uid;
        // console.log("Current ID " + currentId)
        var rootRef = firebase.database().ref();
        const speedRef = rootRef.child("USER/" + currentId);
        speedRef.on("value", snapshot => {
            var aRR = {};
            var obj = snapshot.val();
            for (var key in obj) {
                aRR = obj[key];
            }
            //   console.log(aRR, "aRR")
            //  console.log("values.name", values.nam)
            // console.log("value.Email", values.Email)
            //    var indexes = this.state.key[i];


            var indexxx = this.state.keyy[i];
            // console.log(indexes, 'indexes')
            //  console.log(indexxx, "indexxxxxxxxxxxxx")
            var rootRef = firebase.database().ref();
            //  console.log(indexes, 'indexes')
            //  console.log( index,"index")

            rootRef.child("companydata/" + indexxx + "/Apply/" + currentId).set(aRR);

        })



    }


    render() {

        // console.log(this.props.dataList, "asdasd");
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <Student />
                {
                    (this.props.dataList.getData === true) ? <div>
                        <div
                            style={{
                                display: "",
                                marginLeft: 300
                            }}>

                            <br />
                            <Paper style={{

                                width: 1000,
                                margin: 20,
                                textAlign: 'center',
                                display: 'inline-block',
                            }} zDepth={1} >
                                <Table >
                                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >

                                        <TableRow  >
                                            <TableHeaderColumn >Name</TableHeaderColumn>
                                            <TableHeaderColumn>Job title</TableHeaderColumn>
                                            <TableHeaderColumn>salary</TableHeaderColumn>
                                            <TableHeaderColumn>Job Discription</TableHeaderColumn>
                                            <TableHeaderColumn style={{ paddingLeft: 46 }}>Applied</TableHeaderColumn>




                                        </TableRow>
                                    </TableHeader>
                                    <TableBody style={{ marginLeft: "20px" }}
                                        displayRowCheckbox={false}>

                                        {this.props.dataList.data.map((val, i) => {
                                            return (
                                                <TableRow style={{ textAlign: "center" }} key={i}>
                                                    <TableRowColumn key={i}><h3>{val.name}</h3></TableRowColumn>
                                                    <TableRowColumn key={i}>{val.jobtitle}</TableRowColumn>
                                                    <TableRowColumn key={i}>{val.salary}</TableRowColumn>
                                                    <TableRowColumn key={i}>{val.jobdesc}</TableRowColumn>
                                                    <TableRowColumn key={i} onTouchTap={this.applyjob.bind(this, i)}>
                                                        <FlatButton onTouchTap={this.handleOpen} style={{ textAlign: 'center' }} label="Apply" primary={true}
                                                        /></TableRowColumn>



                                                </TableRow>

                                            )
                                        }
                                        )}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>

                    </div>
                        : <div style={{
                            textAlign: "center",
                            marginTop: "200"
                        }}>

                            <CircularProgress size={80} thickness={5} />
                        </div>}

                <Dialog
                    title=""
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <h2>Apply Successfully</h2>
                </Dialog>

            </div>
        );
    }

};


export default connect(mapStateToProps)(ViewJobs);