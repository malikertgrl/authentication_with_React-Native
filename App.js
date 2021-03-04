import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import Baslık from './src/comp/Baslık';
import LoginForm from './src/comp/LoginForm';
import Button from './src/comp/Button';
import Cardsection from './src/comp/Cardsection';
import Activity from './src/comp/Activity';


class App extends Component{
  state = {loggedIn : null};
  UNSAFE_componentWillMount() {
    firebase.initializeApp( {
      apiKey: 'AIzaSyBXeoLWI-NR0XNjP3RwG72lw4oezQaHzOk',
      authDomain: 'kimlikdogrulama-63056.firebaseapp.com',
      projectId: 'kimlikdogrulama-63056',
      storageBucket: 'kimlikdogrulama-63056.appspot.com',
      messagingSenderId: '455860342271',
      appId:' 1:455860342271:web:0ce31e2d55c95b0e4a6bca'
    });
    
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({loggedIn : true});
      }
      else {
        this.setState({loggedIn : false});
      }
    });

  }
  clickLogout () {
    firebase.auth().signOut();

  }

  renderContent (){
    switch (this.state.loggedIn) {
      case true:
        return (
          <Cardsection>
            <Button  onPress={this.clickLogout.bind(this)}> ÇIKIŞ YAP</Button>
          </Cardsection>
        );
      case false :
        return(
          <LoginForm />

        );
        
    
      default:
        return(
          <View style ={{ marginTop: 300 }}>
            <Activity size="large"  />
          </View>
          
        );
    }
  }

  render (){
    return(
        <View>
          <Baslık  headerText = {'GİRİŞ EKRANI'} />
          {this.renderContent()}
        </View>

    );
  }
}









export default App;
