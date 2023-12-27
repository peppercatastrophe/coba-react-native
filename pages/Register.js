import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import styles from "../styles/style";

const FormStyles = StyleSheet.create({
  text: {
    color: '#fff',
    height: 18
  },
  textInput: {
    height: 35,
    borderColor: '#fff',
    backgroundColor: '#333',
    marginBottom: 20
  },
})

export default function Register() {
  return (
    
      <View
        style={{
          ...styles.container,
          justifyContent: "center"
        }}
      >

        {/* Username */}
        <View
          style={{
            width: "50%"
          }}
        >
          <Text 
            style={FormStyles.text}
          >
            Username
          </Text>
          <TextInput
            style={FormStyles.textInput}
            textContentType="username"
          />
        </View>

        {/* Password */}
        <View
          style={{
            width: "50%"
          }}
        >
          <Text 
            style={FormStyles.text}
          >
            Password
          </Text>
          <TextInput
            style={FormStyles.textInput}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>

        
        <Button
          title="Register"
          color='#888888'
          onPress={ ()=>{} }
        />
      </View>
    
  )
}