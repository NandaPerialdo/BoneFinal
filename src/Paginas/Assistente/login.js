import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', columnGap: 65,
                    marginLeft: '-24%'
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{marginTop: '-5%', height: 35, width: 31}} source={require('../../assets/botaoVoltar.png')}></Image>
        </TouchableOpacity>
        <Image style={styles.logo}  source={require('../../assets/Logo-sem-fundo e sem letra 2.png')}></Image>
      </View>
      <View style={{flex: 1, alignItems: 'center', marginTop: '-8%'}}>
        <Text style={styles.textoLogin}>Login</Text>
      </View>
      <View style={{flex: 2.5, alignItems: 'center', }}>
        <TextInput style={styles.input}  
          placeholder='Usuário'
          placeholderTextColor = "white"
        />
        <TextInput style={styles.input} 
          placeholder='Senha'
          placeholderTextColor = "white"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Gps')} style={styles.fundoBotao}>
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CadastroAcompanhante')}>
          <Text style={styles.textoCadatro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.5, flexDirection: 'row',  alignItems: 'center', justifyContent: 'center'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#414141',
  },
  logo:{
    marginTop: 40,
    height: 100,
    width: 120,
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    color: 'white',
    width: '85%',
    height: '18%',
    borderRadius: 5,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    marginBottom: '4%',
  },
  textoLogin: {
    marginTop: '5%',
    color: '#FFCF66',
    marginBottom: '15%',
    fontSize: 20,
  },
  fundoBotao: {
    marginTop: '5%',
    backgroundColor: '#FFCF66',
    borderRadius: 5,
    width: '85%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  textoCadatro: {
    fontWeight: 'bold',
    color: '#FFCF66',
    marginTop: 60,
    fontSize: 20,
  },
});
