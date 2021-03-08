import React, { useState } from 'react';
import { Text } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { actionAuthRequest } from '../../store/auth/actions';
import { Container, Fields, PrimaryText, RequestButton } from './styles';

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return <Container>
      <PrimaryText>isLoading: {props.auth.isLoading ? 'Sim' : 'Não'}</PrimaryText>
      <PrimaryText>error: {props.auth.error ? 'Sim' : 'Não'}</PrimaryText>
      
      <PrimaryText>nome: {props.auth.data ? props.auth.data.name : ''}</PrimaryText>
      <Fields
        placeholder={'Username'}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Fields
        placeholder={'Password'}
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <RequestButton title="Entrar" onPress={() => {
        dispatch(actionAuthRequest({
          username: username,
          password: password
        }))
      }} />
  </Container>;
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Login);