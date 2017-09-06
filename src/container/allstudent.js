

import Company from './company';


import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
// import { CompanyInfoAction } from '../store/action/companyinfo'
import { StudentInfoAction } from '../store/action/studentinfo'
import firebase from '../firebase'
import CircularProgress from 'material-ui/CircularProgress';




function mapStateToProps(state) {
    return {
        dataListt: state.CompanyInfo
    }

}


class Allstudents extends Component {

    componentWillMount() {
        var userId = firebase.auth().currentUser.uid;
        //  this.props.dispatch(CompanyInfoAction.fetchingData(userId));
        this.props.dispatch(StudentInfoAction.fetchingData(userId));
    }


    render() {
        // {console.log(this.props.dataListt, "state")}
        return (
            <div>
                <Company />
                {
                    (this.props.dataListt.getData) ?
                        <div style={{
                            display: "",
                            marginLeft: 300
                        }}>
                            <br />
                            <Paper style={{
                                width: 1000,
                                margin: "0 auto",
                                textAlign: 'center',
                                display: 'inline-block',
                            }} zDepth={1} >
                                <Table >
                                    <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                                        <TableRow  >
                                            <TableHeaderColumn >Name</TableHeaderColumn>
                                            <TableHeaderColumn>Qualification</TableHeaderColumn>
                                            <TableHeaderColumn>CGPA</TableHeaderColumn>
                                            <TableHeaderColumn>Skill</TableHeaderColumn>
                                            <TableHeaderColumn>OverView</TableHeaderColumn>
                                            
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody style={{ marginLeft: "20px" }}
                                        displayRowCheckbox={false}>
                                        {this.props.dataListt.data.map((val, i) => {
                                            return (
                                                <TableRow style={{ textAlign: "center" }} key={i}>
                                                    <TableRowColumn key={i}><h3>{val.name}</h3></TableRowColumn>
                                                    <TableRowColumn key={i}>{val.qualification}</TableRowColumn>
                                                    <TableRowColumn key={i}>{val.cgpa}</TableRowColumn>
                                                    <TableRowColumn key={i}>{val.skills}</TableRowColumn>
                                                    <TableRowColumn key={i}>{val.overview}</TableRowColumn>
                                                    
                                                </TableRow>
                                            )
                                        }
                                        )}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>

                        : <div style={{
                            textAlign: "center",
                            marginTop: "200"
                        }}>

                            <CircularProgress size={80} thickness={5} />
                        </div>
                }


            </div>
        );
    }

};


export default connect(mapStateToProps)(Allstudents);