import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Login from './pages/Login';
import Home from './pages/Home';
import AnimeDetail from './pages/AnimeDetail';
import Register from './pages/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />

      <Stack.Navigator>

        <Stack.Screen 
          name="Login" 
          component={Login} 
          // options={{headerShown:false}}
          options={{
            headerBackButtonMenuEnabled:false, 
            headerBackVisible: false,
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor: '#000'
            }
            //
          }}
        />

        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title:'Home',
            headerBackButtonMenuEnabled:false, 
            headerBackVisible: false,
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor: '#000'
            }
            //
          }}
        />
        
        <Stack.Screen 
          name="AnimeDetail" 
          component={AnimeDetail}
          options={({ route }) => ({ 
            title: route.params.data.attributes.titles.en_jp,
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor: '#000'
            }
          })} 
        />
        
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{ 
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor: '#000'
            }
          }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


