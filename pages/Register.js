import axios from "../configs/instance";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import styles from "../styles/style";
import { useState } from "react";
import { FormStyles } from '../styles/form-styles'

export default function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function onPressRegister() {
    console.log("Register");
    console.log(email, password);
    try {
      let formJson = { email, password, fullName };
      const res = await axios.post("/register", formJson);
      if (res.data) {
        // TODO: show success message
        console.log("Register success");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
      } else {
        console.log(JSON.stringify(err, null, 2));
      }
    }
  }

  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "center",
      }}
    >
      {/* Full Name */}
      <View
        style={{
          width: "50%",
        }}
      >
        <Text style={FormStyles.text}>Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={(a) => setFullName(a)}
          style={FormStyles.textInput}
          placeholder="full name"
          placeholderTextColor="#999"
        />
      </View>

      {/* email */}
      <View
        style={{
          width: "50%",
        }}
      >
        <Text style={FormStyles.text}>email</Text>
        <TextInput
          value={email}
          onChangeText={(a) => setemail(a)}
          style={FormStyles.textInput}
          placeholder="email"
          placeholderTextColor="#999"
        />
      </View>

      {/* Password */}
      <View
        style={{
          width: "50%",
        }}
      >
        <Text style={FormStyles.text}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(a) => setPassword(a)}
          style={FormStyles.textInput}
          secureTextEntry
          placeholder="password"
          placeholderTextColor="#999"
        />
      </View>

      <Button title="Register" color="#777" onPress={onPressRegister} />
    </View>
  );
}
