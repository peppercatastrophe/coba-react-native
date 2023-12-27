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
  
  return (
    <View style={styles.container}>
      <Text style={{color: '#aaa', fontSize: 20, textAlign: "center"}}>(Powered by Kitsu API)</Text>
      <Text style={{color: '#fff', fontSize: 22, textAlign: "center"}}>Pretend there's the login mechanism</Text>

      <View
        style={{
          padding: 90,
          width: '100%'
        }}
      >
        <Button 
          title='Login'
          onPress={onPressLogin}
        />
      </View>
    </View>
  );
}
