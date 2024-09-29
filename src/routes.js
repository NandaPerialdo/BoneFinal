import { NavigationContainer } from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePA} from './pages/homePA'
import {AtivarSensores} from './pages/config'

const stack = createNativeStackNavigator();

export function Routes(){
    return(
        <Tab.Navigator screenOptions={{tabBarStyle: { display: 'none' }}}>
            <Tab.Screen name="home" component={HomePA} options={{headerShown: false,}} />

            <Tab.Screen name="config" component={AtivarSensores}/>
        </Tab.Navigator>
    )
}