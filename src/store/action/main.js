import { browserHistory } from 'react-router';
import firebase from '../../firebase'

export class MainAction {

    static checkLogin(loginState) {
        return (dispatch) => {
            if (loginState === false) {
                browserHistory.replace("/")
         //       console.log("if")
               // console.log(loginState, "check login plsss")
            }
    
        }
    }

    static signout(loginState) {
        return (dispatch) => {
            firebase.auth().signOut().then(function () {
                browserHistory.replace("/");
            })

          //  console.log("logout hugyaaaaa")
        }
    }
}