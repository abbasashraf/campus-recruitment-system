
import Company from './company';

import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
//import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';
//import CircularProgress from 'material-ui/CircularProgress';
import firebase from '../firebase'
//import { CompanyInfoAction } from '../store/action/companyinfo'
// import { StudentInfoAction } from '../store/action/studentinfo'
//import { PostedJobAction } from '../store/action/postedjobs'


// function mapStateToProps(state) {
//       return {
//             dataList: state.postedJobs
//       }

// }

class Job extends Component {
      constructor() {
            super();
            this.state = {
                  arr: []
            }
      }
      componentDidMount() {
            firebase.auth().onAuthStateChanged(() => {
                  firebase.database().ref().child('companydata').orderByChild("Id").equalTo(firebase.auth().currentUser.uid).on("value", (snap) => {
                        var dataSnapshot = snap.val();
                        var vals = [];
                        for (var i in dataSnapshot) {
                              vals.push(dataSnapshot[i])
                        }
                        this.setState({ arr: vals })


                  })
            })
      }

      render() {
         //   console.log(this.state.arr, "sdfsdfsdfsdfsdf")

            return (


                  <div>
                        <div>
                              <Company />
                        </div>
                        <div style={{
                              display: "",
                              marginLeft: 300,
                        }}>
                              <Paper style={{
                                    width: 1000,
                                    margin: 20,
                                    textAlign: 'center',
                                    display: 'inline-block',
                              }} zDepth={1} >
                                    <Table >
                                          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                                                <TableRow style={{ width: 1000 }}>
                                                      <TableHeaderColumn >Company Name</TableHeaderColumn>
                                                      <TableHeaderColumn >Job title</TableHeaderColumn>
                                                      <TableHeaderColumn >salary</TableHeaderColumn>
                                                      <TableHeaderColumn >Job Discription</TableHeaderColumn>
                                                      <TableHeaderColumn >Applied Details</TableHeaderColumn>

                                                </TableRow>

                                          </TableHeader>
                                          <TableBody style={{ marginLeft: "20px", }}
                                                displayRowCheckbox={false}>

                                                {this.state.arr.map((jobs, ind) => (
                                                      <TableRow  key={ind}>
                                                            <ViewJobs  jobs={jobs} />
                                                      </TableRow>
                                                ))
                                                }


                                          </TableBody>
                                    </Table>
                              </Paper>

                        </div>
                        

                  </div>
            )
      }

}



class ViewJobs extends Component {
      constructor() {
            super();
            this.state = {
      
                  arr: []

            }
      }

      state = {
            open: false,
      };

      handleOpen = () => {
            this.setState({ open: true });
      };

      handleClose = () => {
            this.setState({ open: false });
      };

      componentDidMount() {
            var obj = this.props.jobs.Apply;
           // console.log(obj)
            var arr = [];
            for (let a in obj) { arr.push(obj[a]) }
          //  console.log(arr)

            this.setState({ arr })
      }





      render() {

            // console.log(this.state.arr, "arr ma value save hain")
            // console.log(this.props.dataList, "datalist of posted jobs");
            // console.log(this.state.ARR, "ARR ARR ARR")
            // console.log(this.state.arr, "arr arr arr")
            console.log(this.state.arr)
            var arr = this.state.arr;
            var jobs = this.props.jobs;


            const actions = [
                  <FlatButton
                        label="Cancel"
                        primary={true}
                        onTouchTap={this.handleClose}
                  />,
            ];
            return (
                  <div >
                        <div ><Table>
                              <TableBody style={{ marginLeft: "20px", }}
                                                displayRowCheckbox={false}>
                              <TableRowColumn ><h3>{jobs.name}</h3></TableRowColumn>
                              <TableRowColumn >{jobs.jobtitle}</TableRowColumn>
                              <TableRowColumn >{jobs.salary}</TableRowColumn>
                              <TableRowColumn >{jobs.jobdesc}</TableRowColumn>
                              <TableRowColumn>
                                    <FlatButton label="view" primary={true} onTouchTap={this.handleOpen} /></TableRowColumn>
</TableBody>

</Table>
                        </div>
                     



                        <div>
                              <Dialog
                                    title="Applied Students Information"
                                    actions={actions}
                                    modal={true}
                                    open={this.state.open}
                              >

                                    {arr.map((val, i) => {
                                          return (
                                                <TableRow style={{ textAlign: "center" }} key={i}>
                                                      <TableRowColumn key={i}> <h3> Name :</h3> {val.nam}</TableRowColumn>
                                                      <br />
                                                      <TableRowColumn key={i}> <h3> Email :</h3> {val.email}</TableRowColumn>

                                                </TableRow>
                                                
                                                

                                          )
                                    }
                                    )}
                              </Dialog>
                        </div>
                  </div >
            );
      }

};


export default Job;

