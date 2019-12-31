import React from 'react';
import { Button, View, Text } from 'react-native';

import {globalStyles} from '../assets/styles/Styles';

export default function ReviewDetails({ navigation }) {
    // const goBack = () => {
    //     navigation.goBack();
    // }
    const passedItem = navigation.getParam('item');
    // Ore navigation.getParam('title') directly
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{passedItem.title}</Text>
            <Text style={globalStyles.paragraph}>{passedItem.body}</Text>
            <Text style={globalStyles.paragraph}>{passedItem.rating}</Text>
            {/* <Button title="Go Back" onPress={goBack}/> */}
        </View>
    )
}