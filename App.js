import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import {AtivarSensores} from './src/pages/config'
import { HomePA } from './src/pages/homePA';

//navegação entre telas
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homePA" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homePA" component={HomePA} />
        <Stack.Screen name="config" component={AtivarSensores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
