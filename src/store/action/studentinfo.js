import firebase from '../../firebase'


export class StudentInfoAction {

    static ADDDATA = "ADDDATA";
    static ADDFIREBASE = "ADDFIREBASE";
    static FETCHINGDATA = "FETCHINGDATA";
    static GETDATA = "GETDATA";

    static addData() {
        return {
            type: StudentInfoAction.ADDDATA,
        }
    }

    static addFirebase(data) {
        return (dispatch) => {
            var userId = firebase.auth().currentUser.uid;
           // firebase.database().ref().child("stuData/" + userId).set(data);

            //   var userId = firebase.auth().currentUser.uid;
            // var newk = firebase.database().ref().child("USER/" + userId).push(data).key
            var dataref = firebase.database().ref().child("stuData/"+userId).set(data);
            dataref.then(() => {
                dispatch(StudentInfoAction.addData())
               // console.log("student data added")
            }).catch((err) => {
                alert(err)
            })
        }
    }

    static getData(fetchData) {
        return {
            type: StudentInfoAction.GETDATA,
            payload: fetchData,
        }
        //  console.log(this.props.payload, "payload")

    }

    static fetchingData() {

        return (dispatch) => {
            //   var userId = firebase.auth().currentUser.uid;

            var getData = firebase.database().ref().child("stuData/");
            getData.on("value", (snapshot) => {
                var arr = [];
                var obj = snapshot.val();
                for (var key in obj) {
                    arr.push(obj[key]);
                }

              //  console.log("student data fetch", arr)
                dispatch(StudentInfoAction.getData(arr))

            })
        }
    }



}




