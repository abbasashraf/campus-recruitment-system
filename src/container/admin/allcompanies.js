
import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { CompanyInfoAction } from '../../store/action/companyinfo'
import Admin from './admin'
import CircularProgress from 'material-ui/CircularProgress';

//import { StudentInfoAction } from '../store/action/studentinfo'

function mapStateToProps(state) {
      return {
            dataList: state.CompanyInfo
      }

}

class Allcompanies extends Component {

            componentWillMount() {
            this.props.dispatch(CompanyInfoAction.fetchingData());
          //  this.props.dispatch(StudentInfoAction.fetchingData());
      }
      render() {

            // console.log(this.props.dataList, "state company")
            return (
                  <div>
                             <Admin/>
                      
                        {
                              (this.props.dataList.getData) ?
                                    <div style={{
                                          display: "",
                                          marginLeft: 350
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
                                                                  <TableHeaderColumn >Company name</TableHeaderColumn>
                                                                  <TableHeaderColumn>Email</TableHeaderColumn>


                                                            </TableRow>
                                                      </TableHeader>
                                                      <TableBody style={{ marginLeft: "20px" }}
                                                            displayRowCheckbox={false}>

                                                            {this.props.dataList.data.map((val, i) => {
                                                                  return (
                                                                        <TableRow style={{ textAlign: "center" }} key={i}>
                                                                              <TableRowColumn key={i}><h3>{val.name}</h3></TableRowColumn>
                                                                              <TableRowColumn key={i}><h3>{val.email}</h3></TableRowColumn>

                                                                        </TableRow>

                                                                  )
                                                            }
                                                            )}
                                                      </TableBody>
                                                </Table>
                                          </Paper>
                                    </div> : <div style={{
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


export default connect(mapStateToProps)(Allcompanies);