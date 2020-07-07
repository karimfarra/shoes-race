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

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  setInputValue = text => {
    this.setState({
      inputValue: text,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.niceFont}>ShoeRace</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Re-Password"
            placeholderTextColor="rgba(225,255,225,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>
        <View style={styles.ViewTouch}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6e58d',
    alignItems: 'center',
    flexGrow: 1,
  },
  niceFont: {
    fontFamily: 'Bangers-Regular',
    fontSize: 60,
  },
  inputContainer: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    height: 40,

    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#ffbe76',
    paddingLeft: 2,
    paddingRight: 2,
    width: 300,
    opacity: 1.9,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: '#e67e22',
    width: 300,
    height: 30,
    alignItems: 'center',
    marginTop: 70,
  },
  ViewTouch: {
    marginTop: 30,
  },
});
