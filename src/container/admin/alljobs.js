
import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { CompanyInfoAction } from '../../store/action/companyinfo'
import Admin from './admin'
import firebase from '../../firebase'
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';



//import { StudentInfoAction } from '../store/action/studentinfo'


function mapStateToProps(state) {
    return {
        dataList: state.CompanyInfo
    }

}




class Alljobs extends Component {

    constructor() {
        super();
        this.state = {
            key: []
        }
    }

    componentWillMount() {

        this.props.dispatch(CompanyInfoAction.fetchingData());
        //  this.props.dispatch(StudentInfoAction.fetchingData());
        var getData = firebase.database().ref().child("companydata/");
        getData.on('value', snap => {
            var userObj = snap.val();
            var key = Object.keys(userObj);
            this.setState({
                key
            })
        })
    }

    removeitem(i) {

        var indexValue = this.state.key[i]
        firebase.database().ref('companydata/' + indexValue).remove();
        // console.log(indexValue, "index value")
        //  console.log('delete item')
    }
    render() {
        //   console.log(this.props.dataList, "asdasd");

        return (
            <div>
                <Admin />

                {
                    (this.props.dataList.getData) ?

                        <div style={{
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
                                    <TableHeader
                                        adjustForCheckbox={false} displaySelectAll={false} >

                                        <TableRow  >
                                            <TableHeaderColumn >Name</TableHeaderColumn>
                                            <TableHeaderColumn>Job title</TableHeaderColumn>
                                            <TableHeaderColumn>salary</TableHeaderColumn>
                                            <TableHeaderColumn>Job Discription</TableHeaderColumn>
                                            <TableHeaderColumn style={{ paddingLeft:"48px" }}> Remove</TableHeaderColumn>


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


                                                    <TableRowColumn onTouchTap={this.removeitem.bind(this, i)} key={i}>
                                                        <FlatButton  style={{ float: 'left' }} label="Remove" secondary={true}
                                                        /></TableRowColumn>

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


export default connect(mapStateToProps)(Alljobs);