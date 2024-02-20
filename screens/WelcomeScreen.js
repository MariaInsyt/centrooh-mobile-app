import {StyleSheet, StatusBar, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Welcome = props => {
  const {navigation} = props;

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#041123',
      }}>
      <StatusBar
        animated={true}
        backgroundColor="#041123"
        barStyle="light-content"
      />
      <ScrollView style={[styles.wholePage]}>
        <View>
          <Image
            source={require('../assets/image/logo.png')}
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
          <Text style={[styles.welcomeText]}>WELCOME</Text>
        </View>
        <View>
          <Image
            source={require('../assets/image/dot.gif')}
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginButton}>
            <Text style={{fontWeight: 'bold'}}> LOG IN </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.signupLink]}>Not a user yet? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wholePage: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '100%',
  },
  welcomeText: {
    marginTop: 20,
    color: 'white',
    fontSize: 55,
    alignSelf: 'center',
  },
  loginButton: {
    marginTop: 120,
    alignItems: 'center',
    backgroundColor: '#B0F5ED',
    padding: 10,
    borderRadius: 10,
  },
  signupLink: {
    marginTop: 15,
    color: 'white',
    alignSelf: 'center',
  },
});
