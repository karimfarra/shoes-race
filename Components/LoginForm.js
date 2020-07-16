import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  placeholderTextColor,
  KeyboardAvoidingView,
} from 'react-native';
import {withOrientation} from 'react-navigation';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  input: {
    height: 40,
    backgroundColor: '#ffbe76',
    paddingLeft: 2,
    paddingRight: 2,
    width: 300,
    opacity: 1.9,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 40,
    color: 'white',
    fontSize: 30,
  },
});
