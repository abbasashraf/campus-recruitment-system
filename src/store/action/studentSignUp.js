import firebase from "../../firebase";
import {browserHistory} from "react-router";


export class studentSignUpAction {
    static SIGNUP= "SIGNUP";
    static SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
    static SIGN_UP_UNSUCCESS = "SIGN_UP_UNSUCCESS";

    static StudentSignUp(credentials){
        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then((res)=>{
               var userID = firebase.auth().currentUser.uid;

            firebase.database().ref().child("USER/" + userID).push(credentials);
               browserHistory.push("/");
            

                dispatch(studentSignUpAction.SignUpSucess());
            }).catch((err)=>{
                alert(err.message)
                dispatch(studentSignUpAction.SignUpUnsuccess())
            });
        }
    }

    static SignUpSucess(){
        return {
            type: studentSignUpAction.SIGN_UP_SUCCESS
        }
    }
    static SignUpUnsuccess(){
        return {
            type: studentSignUpAction.SIGN_UP_UNSUCCESS
        }
    }




}