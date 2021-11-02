import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';
import Requisicao from './components/Requisicao'
import Globais from './components/Globais';
import DateTime from './components/DateTime'

const img = require('./assets/image.png')


export default function App() {
  const [text, setText] = useState('');
  Globais.cidade = text


  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >

        <TextInput
          style={styles.campoBusca}
          placeholder="Insira o nome da cidade"
          onChangeText={text => setText(text)}
          defaultValue= {text}
        />

      <Button 
            title="Pesquisar"
            onPress={() => Requisicao()}
      />
        <DateTime/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
  },
  campoBusca: { 
    marginTop: 50,
    backgroundColor: '#e5e4e2',    
    borderRadius: 100,
    width: '100%', 
    height: 40,
    textAlign: 'center',
  },
  envioBusca: {        
    margin: '5%',    
    textAlign: 'center',
    color: "#fff",
    justifyContent: 'center',
    padding: 10
  }, 
});
