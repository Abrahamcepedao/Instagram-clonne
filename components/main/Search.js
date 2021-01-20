import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import firebase from '../../database/firebase';

export default function Search() {
    const [users, setUsers] = useState([])
    const fetchUseers = (search) => {
        firebase.db
            .collection('users')
            .where('name', '>=', search)
            .get()
            .then((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setUsers(users);
            })
    }
    return (
        <View>
            <Text>Search</Text>
        </View>
    )
}
