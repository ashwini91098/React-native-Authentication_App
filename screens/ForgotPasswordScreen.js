import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';
export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onResetPasswordPress = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(
        () => {
          Alert.alert('Password reset email has been sent');
        },
        error => {
          Alert.alert(error.message);
        },
      );
  };
  render() {
    return (
      <View style={{paddingTop: 100, alignItems: 'center'}}>
        <Text>Forgot Password</Text>

        <TextInput
          style={{width: 210, height: 30, borderWidth: 2}}
          value={this.state.email}
          onChangeText={text => {
            this.setState({email: text});
          }}
          placeholder=" Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.onResetPasswordPress}>
          <Text style={{color: '#414959', fontSize: 13}}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginHorizontal: 100,
    marginTop:22,
    backgroundColor: 'orange',
    borderRadius: 4,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
