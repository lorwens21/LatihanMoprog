import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Gap height={25} />
      <TextInput label="Username" placeholder="Masukan username anda" />
      <Gap height={20} />
      <TextInput label="Password" placeholder="Masukan password anda" />
      <Gap height={40} />
      <Button label="Sign in" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default Login;