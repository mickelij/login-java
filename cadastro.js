import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://images.app.goo.gl/MiN8uapwgyncTgKw8' }} // Substitua pela URL da imagem desejada
          style={styles.logo}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Confirme a Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: 'black',
    flex: 1,
    borderColor: 'black',
  },
  signupBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: "#ff69b4", // Cor de fundo rosa
  },
});

export default SignUpScreen;
