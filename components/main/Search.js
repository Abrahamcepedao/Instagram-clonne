import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import firebase from '../../database/firebase';

export default function Search() {
    const [users, setUsers] = useState([])
    const fetchUsers = (search) => {
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
            <TextInput placeholder="Type here..." onChange={(search) => fetchUsers(search)}/>
            <FlatList
                numColumns={1}
                horizontal={false}
                data={users}
                renderItem={({item}) => (
                    <TexT>{item.name}</TexT>
                )}
            />
        </View>
    )
}
