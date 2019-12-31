import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
// import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'ReviewsReactExpo'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#666', height: 100 }
    }
});

export default HomeStack;