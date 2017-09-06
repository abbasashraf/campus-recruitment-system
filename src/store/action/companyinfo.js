import firebase from '../../firebase'


export class CompanyInfoAction {

    static ADDDATA = 'ADDDATA';
    static ADDFIREBASE = 'ADDFIREBASE';
    static FETCHINGDATA = "FETCHINGDATA";
    static GETDATA = "GETDATA";

    // static FETCHINGUSERDATA = "FETCHINGUSERDATA";
    // static GETUSERDATA = "GETUSERDATA"



    static addData() {
        return {
            type: CompanyInfoAction.ADDDATA,
        }
    }
    static addFirebase(data) {
        return (dispatch) => {
            //   var userId = firebase.auth().currentUser.uid;
            //firebase.database().ref().child("comData/"+ userId).push(data)
            // var newk = firebase.database().ref().child("USER/" + userId).push(data).key
            var dataref = firebase.database().ref().child("companydata/").push(data);
            dataref.then(() => {
                //   console.log("company data upload", data, + "iserId", userId)
                dispatch(CompanyInfoAction.addData());
            }).catch((err) => {
                alert(err)
            })
        }
    }
    static getData(fetchData) {
        return {
            type: CompanyInfoAction.GETDATA,
            payload: fetchData,
        }

    }

    static fetchingData() {
        return (dispatch) => {
            //    var userId = firebase.auth().currentUser.uid;

            // console.log("fetching userid", userId)
            var getData = firebase.database().ref().child("companydata/");
            getData.on("value", (snapshot) => {
                var obj = snapshot.val();
                for (var key in obj) {
                    var arrr = [];
                    arrr.push(obj[key]);
                }
                // console.log("company data fetch", arrr)
                dispatch(CompanyInfoAction.getData(arrr))

            })
        }

    }



}