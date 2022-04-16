import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {LOGIN} from '../../constants/routeName';
import styles from './styles';

const RegisterComponent = ({
  form,
  errors,
  onSubmit,
  onChange,
  error,
  loading,
}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Text style={styles.title}>Welcome to RNContacts</Text>
      <Text style={styles.subTitle}>Create a free account here!</Text>
      {/* {!!error.error && <Text>{error.error}</Text>} */}
      <Input
        label="Username"
        placeholder="Enter Username"
        onChangeText={value => {
          onChange({name: 'userName', value});
        }}
        error={errors.userName}
      />
      <Input
        label="First Name"
        placeholder="Enter First Name"
        onChangeText={value => {
          onChange({name: 'firstName', value});
        }}
        error={errors.firstName}
      />
      <Input
        label="Last Name"
        placeholder="Enter Last Name"
        onChangeText={value => {
          onChange({name: 'lastName', value});
        }}
        error={errors.lastName}
      />
      <Input
        label="Email"
        placeholder="Enter your Email"
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        error={errors.email}
      />
      <Input
        label="Password"
        icon={<Text>SHOW</Text>}
        placeholder="Enter Password"
        secureTextEntry={true}
        iconPosition="right"
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
        error={errors.password}
      />
      <CustomButton
        onPress={onSubmit}
        title="Submit"
        primary
        loading={loading}
        disabled={loading}
      />
      <View style={styles.bottomSection}>
        <Text style={styles.infoText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.linkButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;
