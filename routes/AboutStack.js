import { createStackNavigator } from 'react-navigation-stack';

import About from '../screens/About';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About'
        }
    }
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#666', height: 100 }
    }
});

export default AboutStack;