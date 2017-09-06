// current user
import firebase from '../../firebase'

export class PostedJobAction {

    static FETCHINGUSERDATA = "FETCHINGUSERDATA";
    static USERGETDATA = "USERGETDATA";

    static getUserData(fetchData) {
        return {
            type: PostedJobAction.USERGETDATA,
            payload: fetchData,

            
        }

    }


    static fetchingUserData() {
        return (dispatch) => {
            var userId = firebase.auth().currentUser.uid;

           // console.log("fetching userid", userId)
            var getData = firebase.database().ref().child("comData/"+ userId);
            getData.on("value", (snapshot) => {
                var userArr = [];
                var obj = snapshot.val();
                for (var key in obj) {
                    userArr.push(obj[key]);
                }
             //   var key = Object.keys(obj);
                
               // console.log("company data fetch", userArr)
                dispatch(PostedJobAction.getUserData(userArr))

            })
        }



    }
}