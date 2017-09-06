import firebase from '../../firebase';
import { browserHistory } from "react-router";
import { CompanyInfoAction } from './companyinfo'
import { StudentInfoAction } from './studentinfo'




export class SigninAction {

    static LOGIN = "LOGIN";
    static LOGIN_SUCCESS = "LOGIN_SUCCESS";
    static LOGIN_UN_SUCCESS = "LOGIN_UN_SUCCESS";
    static GETUSERINFO = "GETUSERINFO";


    static login(credentials) {
        return (dispatch) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(function (res) {
            //    console.log("login success")
                //  console.log(res);
                var typeCheck;
                var userId = firebase.auth().currentUser.uid;
                const rootRef = firebase.database().ref();
                const speedRef = rootRef.child("USER/" + userId);
                speedRef.on('value', snapshot => {
                    var arr = [];
                    var obj = snapshot.val();
                    for (var key in obj) {
                        arr.push(obj[key]);
                    }
                 dispatch(SigninAction.getData(arr))
                    arr.map((val, i) => {
                        typeCheck = val.type;
                    })
                    //         typeCheck= snap.val().credentials.type;
                    //    //     console.log(snap.val().credentials.type, "snapshoot")
                    if (credentials.email === "abc@admin.com" && credentials.password === "123456") {
                        browserHistory.push('/admin');
                    }
                  //  console.log(typeCheck, 'typecheck');
                    if (typeCheck === 'student') {
                        browserHistory.push('/Student');
                    }
                    if (typeCheck === 'company') {
                        browserHistory.push('/Company');
                    }
                })
                dispatch(CompanyInfoAction.fetchingData(userId));
                dispatch(StudentInfoAction.fetchingData(userId));


                dispatch(SigninAction.loginSuccess());
                alert("Sign in succesfully")
                // browserHistory.push("/student");

            }).catch((err) => {
                alert(err.message)
                dispatch(SigninAction.loginUnSuccess());
               // console.log("not sign in")
            });
        }
    }
    static loginSuccess() {
        return {
            type: SigninAction.LOGIN_SUCCESS,

        }
    }
    static loginUnSuccess() {
        return {
            type: SigninAction.LOGIN_UN_SUCCESS,

        }
    }


    static getData(fetchData) {
        return {
            type: SigninAction.GETUSERINFO,
            payload: fetchData,
        }
        //  console.log(this.props.payload, "payload")

    }


}