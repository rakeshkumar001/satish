import * as React from 'react';
import Categories from '../screens/Categories';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import { colors } from './theme';
import ScreenHeader from '../components/ScreenHeader';
import CartPage from '../screens/CartPage';
import CategoryList from '../screens/CategoryList';

const Routing = (props) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} options={{ backgroundColor: 'transparent', headerTitle: (props) => <Header {...props} /> }} />
            <Stack.Screen name="Categories" component={Categories} options={{ backgroundColor: 'transparent', headerTitle: (props) => <ScreenHeader title="Categories"  {...props} /> }} />
            <Stack.Screen name="CategoryList" component={CategoryList} options={{ backgroundColor: 'transparent', headerTitle: (props) => <ScreenHeader title="CategoryList"  {...props} /> }} />
            <Stack.Screen name="Cart" component={CartPage} options={{ backgroundColor: 'transparent', headerTitle: (props) => <ScreenHeader title="Cart Page"  {...props} /> }} />
            {/* <Stack.Screen name="Cart" component={CartPage} options={{ backgroundColor: 'transparent', headerTitle: (props) => <ScreenHeader title="Cart Page"  {...props} /> }} />
            <Stack.Screen name="Cart" component={CartPage} options={{ backgroundColor: 'transparent', headerTitle: (props) => <ScreenHeader title="Cart Page"  {...props} /> }} /> */}
        </Stack.Navigator>
    );
};
export default Routing;