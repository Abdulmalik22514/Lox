import {Image, StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import {icons} from '../constants';
import {TextInput} from 'react-native-paper';
import AuthButton from '../components/AuthButton';
import {LoginSvg} from '../assets/svgs/svg';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.topBox}>
        <View style={styles.topRoot}>
          <Image resizeMode={'cover'} source={icons.logo} style={styles.logo} />
          <View>
            <Text style={{...FONTS.h2, fontWeight: '900', color: COLORS.white}}>
              The Test
            </Text>
            <Text style={{...FONTS.body7, fontWeight: '500', color: '#0C0C0C'}}>
              Powered by Lox
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.lowerBox}>
        <LoginSvg />

        <View style={styles.loginBox}>
          <Text style={styles.loginTxt}>Sign Up</Text>

          <TextInput
            label="Email"
            value={email}
            underlineColor={COLORS.grey}
            style={{
              backgroundColor: 'white',
            }}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            label="Password"
            value={password}
            underlineColor={COLORS.grey}
            style={{
              backgroundColor: 'white',
            }}
            onChangeText={text => setPassword(text)}
          />

          <AuthButton
            containerStyle={{
              marginTop: SIZES.font1,
            }}
            label={'Sign Up'}
            onPress={() => {
              if (!email.includes('@')) {
                Alert.alert('Invalid Email', 'Please provide a valid email');
                return;
              }

              if (!email && !password) {
                Alert.alert('Required fields', 'please input all fields');
              } else {
                navigation.navigate('Login');
                setEmail('');
                setPassword('');
              }
            }}
          />

          <Text style={styles.continueWith}>Or continue with</Text>

          <View style={styles.socialBox}>
            <View style={styles.googleBox}>
              <Image
                resizeMode="contain"
                source={icons.google}
                style={styles.googleIcon}
              />
            </View>

            <Pressable
              onPress={() => Alert.alert('Google', 'Log in using google')}
              style={styles.googleBox}>
              <Image
                resizeMode="contain"
                source={icons.facebook}
                style={styles.googleIcon}
              />
            </Pressable>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.already}>
            <Text style={{...FONTS.body9, color: COLORS.black}}>
              Already have an account?{' '}
              <Text style={{...FONTS.h9, color: COLORS.black}}>Log In</Text>{' '}
            </Text>
          </Pressable>
        </View>

        <View style={styles.bottomBox} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    ...FONTS.body10,
  },
  topBox: {
    flex: 0.5,
    width: SIZES.width,
    height: SIZES.height * 0.4,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lowerBox: {
    flex: 2,
    backgroundColor: COLORS.primary,
    height: SIZES.height * 0.4,
  },
  bottomBox: {
    backgroundColor: COLORS.white,
    bottom: SIZES.font1,
    height: SIZES.height * 0.5,
  },
  loginBox: {
    zIndex: 10000,
    position: 'absolute',
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.2,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.16,
  },
  loginTxt: {
    ...FONTS.h1,
    color: COLORS.black,
    alignSelf: 'center',
  },
  logo: {
    height: SIZES.font1 * 2.3,
    width: SIZES.font1 * 2.3,
  },
  topRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  continueWith: {
    ...FONTS.body7,
    alignSelf: 'center',
    color: COLORS.grey,
    marginTop: SIZES.font1 * 1.5,
  },
  socialBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.font5,
  },
  googleBox: {
    backgroundColor: '#F1F5F9',
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.07,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: SIZES.width * 0.38,
    height: SIZES.height * 0.035,
    borderRadius: 5,
  },
  already: {
    alignSelf: 'center',
    marginTop: SIZES.font6,
  },
});
