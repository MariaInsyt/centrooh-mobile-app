import React, {useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Add any necessary initialization code here
    // For example, you might want to check if the user is authenticated

    // Redirect to the main screen after a delay
    const timeoutId = setTimeout(() => {
      navigation.replace('Welcome'); // Replace with the name of your main screen
    }, 2000); // Adjust the delay as needed

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [navigation]);

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
            style={{width: 200, height: 213, alignSelf: 'center', marginTop: 80}}
          />
          <Text style={[styles.welcomeText]}>INSYT MEDIA</Text>
          <Text style={[styles.sloganText]}>YOUR OUT OF HOME PARTNER</Text>
          <Text style={styles.signupLink}>Powered By Insytmedia</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wholePage: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '100%',
  },
  welcomeText: {
    marginTop: 20,
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
  },
  signupLink: {
    marginTop: 180,
    color: 'white',
    alignSelf: 'center',
  },
  sloganText: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
});
