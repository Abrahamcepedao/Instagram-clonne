import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Image, Button } from 'react-native'
import { useState } from 'react/cjs/react.development'
import firebase from '../../database/firebase';

export default function Save(props) {
    const [caption, setCaption] = useState(null);

    const uplodadPost = async () => {
        const uri = props.route.params.image;
        const childPath = `posts/${firebase.firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase.storage
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }
        const taskCompleted = () => {
            snapshot.ref.getDownloadURL().then((snapshot) => {
                savePostData(snapshot)
                console.log(snapshot)
            })
        }
        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const savePostData = downloadURL => {
        firebase.db.collection('posts')
            .doc(firebase.firebase.auth().currentUser.uid)
            .collection("userPosts")
            .add({
                downloadURL,
                caption,
                creation: firebase.firebase.firestore.FieldValue.serverTimestamp()
            }).then((function () {
                props.navigation.popToTop()
            }))
    }

    return (
        <View style={{flex: 1}}>
            <Image source={{uri: props.route.params.image}}/>
            <TextInput
                placeholder="Enter cool caption.."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button
                title="Upload post!"
                onPress={() => uplodadPost()}
            />
        </View>
    )
}
