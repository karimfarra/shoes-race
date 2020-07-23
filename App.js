import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Components/login';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './Components/mainpage';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="loginform"
            component={LoginForm}
            options={{headerShown: true}}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="main"
            component={MainPage}
            options={{headerShown: false}}
          />
          {/*  <Stack.Screen name="main" component={MainPage} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
// const App = () => {
//   return (
//     <>
//       <Register />
//     </>
//   );
// };

export default App;
// export default createAppContainer(App);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
