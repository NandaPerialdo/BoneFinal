import React from 'react'
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { CheckBox } from 'react-native-elements'

export function AtivarSensores(){
   const [check1, setCheck1] = useState(false);
   const [check2, setCheck2] = useState(false);
   const [check3, setCheck3] = useState(false);

   return(
      <View style={styles.container}>
         {/*Titulo Topo*/}
         <View style={styles.containerTitulo}>
            <Text style={styles.textoTitulo}>
               Ativar Sensores
            </Text>
         </View>

         {/*Check Boxes*/}
         <View>
         <CheckBox
                  checked={check1} 
                  onPress={() => setCheck1(!check1)} 
                  containerStyle={styles.checkboxContainer} 
                  checkedColor="#232323" 
                  uncheckedColor="#FFFFFF"
                  textStyle={styles.checkboxText}
                  size={70} 
                  />
         <CheckBox title="Opção 2" checked={check2} onPress={() => setCheck2(!check2)}/>
         <CheckBox title="Opção 3" checked={true} disabled={true}/>
         </View>
      </View>
   ) 
}

{/*Definição de Estilos*/}

//estilo da tela
const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor: "#6A6A6A",
     justifyContent: 'center', // Centraliza vertical
     alignItems: 'center',      // Centraliza horizontal
     
   },
   //estilo do titulo
   containerTitulo: {
      backgroundColor: '#383535', // Cor de fundo
      padding: 35, // Espaçamento interno
      alignItems: 'center', // Centraliza horizontalmente
      position: 'absolute', // Faz a View ficar no topo
      top: 0, // Alinha no topo da tela
      left: 0,
      right: 0,
      zIndex: 1, // Garante que fique acima de outros componentes
    },
   //estilo do texto do titulo
   textoTitulo:{
      color: '#FFCF66',
      fontSize: 30,
      fontWeight: '', // Negrito
   },
   //estilo do checkbox
   checkboxContainer:{
      backgroundColor: 'transparent',  // Fundo transparente
      borderWidth: 0,                  // Remove qualquer borda
   },
   //estilo do texto da checkbox
   checkboxText:{
      fontSize: 35,        // Tamanho do texto
      color: '#333',       // Cor do texto
   },
})