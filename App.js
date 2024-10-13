import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import {AtivarSensores} from './src/Paginas/config'
import { HomePA } from './src/Paginas/homePA'
import {Rastrear} from './src/Paginas/rastreamento'

//navegação entre telas
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homePA" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homePA" component={HomePA} />
        <Stack.Screen name="config" component={AtivarSensores} />
        <Stack.Screen name="rastreamento" component={Rastrear} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
