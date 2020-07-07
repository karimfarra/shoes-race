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

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*  <Image
          source={{
            uri:
              'https://previews.123rf.com/images/seregasss435/seregasss4351905/seregasss435190500093/122800987-shoelace-of-sneaker-shoes-tying-shoelaces-fastening-rope-stitch-concept-schemes-of-tying-shoelaces-s.jpg',
          }}
          style={styles.logo}
        /> */}
        <Text>Username</Text>
        {/*  <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="black"
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Password"
            style={styles.input}
          />
          <TouchableOpacity>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View> */}
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
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#FFF',
    width: 800,
    opacity: 50,
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
});
