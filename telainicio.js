import React from "react";
import { View, Text, TextInput, TouchableOpacity,StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-web";

const LoginScreen = () => {
  return (
  <SafeAreaView style={styles.background}>
    <View style={styles.container}>
      <image
       source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dtSwc4d0t7FwQMcbn95UcWfNTnlFI9UObg&s'}}
       style={styles.logo}
       />
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Login"
        placeholderTextColor="#000000"
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Senha"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />
    </View>
        <TouchableOpacity style={styles.loginBnt}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBotton: 40,
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
  loginBnt: {
    width: '80%',
    backgroundColor: '#ff0080',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color:'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#7d5b8c',
  },
});

export default LoginScreen;
