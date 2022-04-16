import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {REGISTER} from '../../constants/routeName';
import styles from './styles';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Text style={styles.title}>Welcome to RNContacts</Text>
      <Text style={styles.subTitle}>Please login here</Text>
      <Input label="Username" placeholder="Enter Username" />
      <Input
        label="Password"
        icon={<Text>SHOW</Text>}
        placeholder="Enter Password"
        secureTextEntry={true}
        iconPosition="right"
      />
      <CustomButton title="Submit" primary />
      <View style={styles.bottomSection}>
        <Text style={styles.infoText}>Need a new account ?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.linkButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
