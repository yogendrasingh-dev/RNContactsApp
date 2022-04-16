import React from 'react';
import {View, Text} from 'react-native';
import LoginComponent from '../../components/Login';
import isConvert from '@foxglovetechno/react-native-onboarding';

const Login = () => {
  return (
    <View>
      <Text>{isConvert('hurry!!!')}</Text>
      <LoginComponent />
    </View>
  );
};

export default Login;
