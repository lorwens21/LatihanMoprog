import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Axios from 'axios';

const InputData = () => {

  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();

    const submitData = ()=>{
      const submit = {
        firstName:firstName,
        lastName: lastName,
        email:email,
    }
      Axios.post('http://10.0.2.2:3004/users', submit)
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Data</Text>
      <Gap height={25} />
      <TextInput  value={firstName} label="Firstname" placeholder="Masukan firstname anda" onChangeText={e => setfirstName(e)} />
      <Gap height={20} />
      <TextInput value={lastName} label="Lastname" placeholder="Masukan lastname anda" onChangeText={e => setlastName(e)} />
      <Gap height={20} />
      <TextInput value={email} label="Email" placeholder="Masukan email anda" onChangeText={e => setEmail(e)} /> 
      <Gap height={40} />
      <Button label="Save" onPress={submitData} />
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

export default InputData;