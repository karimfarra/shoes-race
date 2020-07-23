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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgb(0,0,0)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(0,0,0,0.7)"
            onChangeText={text => this.setInputValue(text)}
            value={this.inputValue}
          />
        </View>
        <View style={styles.ViewTouch}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate('main')}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
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
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 800,
    opacity: 50,

    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FF9800',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  textInput: {},
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
