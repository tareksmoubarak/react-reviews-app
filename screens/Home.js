import React, {useState} from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import {globalStyles} from '../assets/styles/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of fresh air', rating: 5, body: 'Lorem Ipsum', key: '1' },
        { title: 'Gotta Catch them all', rating: 4, body: 'Lorem Ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 2, body: 'Lorem Ipsum', key: '3' },
    ]);
    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails');
    // }
    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', {item: item})}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            {/* <Button title="Go to review dets" onPress={pressHandler}/> */}
        </View>
    )
}