import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE } from "../constants/index";
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

export function fetchUserPosts(){
    return((dispatch) => {
        firebase.db.collection("posts")
            .doc(firebase.firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")  
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return {id, ...data}
                })
                console.log(posts);
                dispatch({type: USER_POSTS_STATE_CHANGE, posts})
            })
    })
}