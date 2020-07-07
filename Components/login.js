import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
    title: 'Register',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri:
                'https://previews.123rf.com/images/seregasss435/seregasss4351905/seregasss435190500093/122800987-shoelace-of-sneaker-shoes-tying-shoelaces-fastening-rope-stitch-concept-schemes-of-tying-shoelaces-s.jpg',
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>Run, run with others.</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text
              style={styles.buttonText}
              onPress={() => navigate('LoginForm')}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer2}>
            <Text
              style={styles.buttonText1}
              onPress={() => navigate('Register')}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#34495e',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    justifyContent: 'center',
    flex: 2,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: 'white',
    width: 160,
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9,

    fontSize: 20,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContainer2: {
    backgroundColor: '#d35400',
    width: 400,
    height: 80,
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#e67e22',
    width: 400,
    height: 80,
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
