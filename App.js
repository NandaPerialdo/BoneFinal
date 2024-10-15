import {NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack';
import {AtivarSensores} from './src/Paginas/Pessoa Assistida/config'
import { HomePA } from './src/Paginas/Pessoa Assistida/homePA'

//import './gesture-handler';


import {PaginaInicial} from './src/Paginas/Assistente/index';
import {Login} from './src/Paginas/Assistente/login';
import {CadastroAcompanhante} from './src/Paginas/Assistente/cadastroAcompanhante';
import {CadastroPessoaAssistida} from './src/Paginas/Assistente/cadastroPessoaAssistida';
import {Gps} from './src/Paginas/Assistente/gps';
import {EscolherUsuario} from './src/Paginas/Assistente/escolherUsuario';
import {UsuarioAcompanhante} from './src/Paginas/Assistente/usuarioAcompanhante';
import {UsuarioPessoaAssistida} from './src/Paginas/Assistente/usuarioPessoaAssistida';

//initialRouteName define a pagina inicial do Assistente
const Stack = createNativeStackNavigator();

export function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='index'   
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='index' component={PaginaInicial}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='CadastroAcompanhante' component={CadastroAcompanhante}/>
        <Stack.Screen name='CadastroPessoaAssistida' component={CadastroPessoaAssistida}/>
        <Stack.Screen name='Gps' component={Gps}/>
        <Stack.Screen name='EscolherUsuario' component={EscolherUsuario}/>
        <Stack.Screen name='UsuarioAcompanhante' component={UsuarioAcompanhante}/>
        <Stack.Screen name='UsuarioPessoaAssistida' component={UsuarioPessoaAssistida}/>
        <Stack.Screen name="homePA" component={HomePA} />
        <Stack.Screen name="config" component={AtivarSensores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
