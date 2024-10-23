import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';

const CadastroScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/711/711769.png'}}
         style={styles.logo}
         />
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder='Nome'
          placeholderTextColor={'#003f5c'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder='E-mail'
          placeholderTextColor={'#003f5c'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder='Senha'
          placeholderTextColor={'#003f5c'}
          />
        </View>
        <TouchableOpacity style={styles.cadastroBtn}>
          <Text style={styles.cadastroText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cadastroBtn1}>
          <Text style={styles.cadastroText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height:  50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    flexDirection:  'row',
    alignItems: 'center',
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: 'black',
    flex: 1,
    borderColor: 'black',
  },
  cadastroBtn: {
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  cadastroText : {
    color: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#f5f5dc',
  },
  cadastroBtn1: {
    width: '80%',
    backgroundColor: 'gray',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default CadastroScreen;
