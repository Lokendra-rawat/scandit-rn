import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AuthContext from 'helpers/AuthContext';

const Signin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, }}>
      <Text style={{
        color: '#e91e63',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
      }}>
        LOGIN
      </Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: '#e91e63',
          width: '100%',
          borderRadius: 4,
          padding: 10,
          marginBottom: 12,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: '#e91e63',
          width: '100%',
          borderRadius: 4,
          padding: 10,
          marginBottom: 12,
        }}
      />
      <Button color="#e91e63" title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
};

export default Signin;
