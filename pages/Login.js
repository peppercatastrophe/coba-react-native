import { StatusBar } from 'expo-status-bar';
import { 
  Button,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import styles from '../styles/style';

export default function Login({ navigation }) {

  function onPressLogin() {
    console.log('Login');
    navigation.navigate('Home')
  }
  
  function onPressRegister() {
    console.log('Register');
    navigation.navigate('Register')
  }
  
  return (
    <View style={styles.container}>
      <Text style={{flex: 1, color: '#aaa', fontSize: 20, textAlign: "center"}}>(Powered by Kitsu API)</Text>
      <Text style={{flex: 1, color: '#fff', fontSize: 22, textAlign: "center"}}>Pretend there's the login mechanism</Text>

      <View
        style={{
          flex: 1,
          flexShrink: 1,
          padding: 90,
          rowGap: 20,
          width: '100%'
        }}
      >
        <Button 
          title='Login'
          onPress={onPressLogin}
        />
        <Button 
          title='Register'
          onPress={onPressRegister}
        />
      </View>
    </View>
  );
}
