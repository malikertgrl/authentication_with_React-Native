import React, {Component} from 'react';
import {View, TextInput, Alert } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Button from './Button';
import Card from './Card';
import Cardsection from './Cardsection';
import Activity from './Activity';

class LoginForm extends Component {
    state ={ email: '', password: '', loading : false };
    clickLogin() {
      this.setState({ loading: true });
      const { email, password } = this.state;
      if (email === '' || password === '') {
        this.setState({ loading: false });
        Alert.alert(
            'Mesaj',
            'Her iki alanda dolu olmalı!',
            [
                {text : 'Tamam', onPress: () => null}
            ]
        );

      }
      else { 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginSucces.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.loginSucces.bind(this))
            .catch(this.loginFail.bind(this));
        });
      }
      
    }
    loginSucces() {
      console.log('başarılı');
      this.setState({ loading: false });
    }
  
    loginFail() {
      console.log('Hatalı');
      this.setState({ loading: false });
      Alert.alert(
          'Mesaj',
          'Kullanıcı adınız veya şifreniz hatalı',
          [
              {text : 'Tamam', onPress: () => null}
          ]
      );
    }
  
    renderButton() {
      if (!this.state.loading) {
        return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
      }
      return  <Activity />; 
      
    }
    render() {
      const { inputStyle } = styles;
      return (
        <Card>
          <Cardsection >
            <TextInput
              placeholder="E-mail"
              style={inputStyle}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </Cardsection>
  
          <Cardsection>
          <TextInput
            secureTextEntry
            placeholder="Şifre"
            style={inputStyle}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          </Cardsection>
  
          <Cardsection>
            {this.renderButton()}
          </Cardsection>
        </Card>
      );
    }
  }
  
  const styles = {
  
  inputStyle: {
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      flex: 1
    },
  
  };
  

 export default LoginForm;