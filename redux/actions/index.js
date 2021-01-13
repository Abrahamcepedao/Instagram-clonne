/* import { USER_STATE_CHANGE } from "../constants/index";
import firebase from "../../database/firebase";

export function fetchUser(){
    return((dispatch) = {
        firebase 
    })
} */

import { USER_STATE_CHANGE } from "../constants/index";
import firebase from '../../database/firebase';

export function fetchUser(){
    return((dispatch) => {
        firebase.db.collection("users").doc(firebase.firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if(snapshot.exists){
                    console.log(snapshot.data())
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                } else{
                    console.log('user does not exists')
                }
            })
    })
}