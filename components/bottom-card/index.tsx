import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import {
  formBackground,
  workerLoginButton,
  workerLoginCard,
  workerLoginDialog,
  workerLoginDialogBox,
} from "../../config/colors"
import HappyAvatar from "../../assets/avatar/happy.png"
import InputField from "../input-field"
import { Button, TextInput, TouchableRipple } from "react-native-paper"

const LoginComponent = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Text style={styles.placeholderText}>Main content goes here</Text> */}
      </View>
      <View style={styles.bottomDiv}>
        <Image
          source={HappyAvatar}
          style={[
            {
              position: "absolute",
              width: 180,
              height: 180,
              objectFit: "contain",
              right: 0,
              top: -150,
              transform: [{ rotate: "-10deg" }],
            },
          ]}
        />

        {/* Message bubble */}
        <View
          style={[
            styles.messageBubble,
            {
              width: 150,
              top: -120, // Adjust vertical position
              right: 180, // Place to the left of the avatar
              padding: 15,
            },
          ]}
        >
          <Text style={styles.messageText}>Please re-enter password</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: 10,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Welcome to DishaX
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: "#fff",
              width: 60,
              height: 0,
            }}
          />
          {/* <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          /> */}
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{
              width: "100%",
              height: 50,
              marginTop: 10,
              borderRadius: 8,
            }}
          />
          <TextInput
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            mode="outlined"
            style={{
              width: "100%",
              height: 50,
              marginTop: 10,
              borderRadius: 8,
            }}
            right={
              <TextInput.Icon
                icon="eye"
                onPress={() => {
                  setPasswordVisible((visibility) => !visibility)
                }}
              />
            }
          />
          <Button
            mode="contained"
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: workerLoginButton,
              height: 50,
              borderRadius: 8,
            }}
          >
            Login
          </Button>
          <TouchableRipple onPress={() => {}}>
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Forgot Password?
            </Text>
          </TouchableRipple>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: formBackground,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 16,
    color: "#888",
  },
  bottomDiv: {
    backgroundColor: workerLoginCard,
    padding: 20,
    paddingTop: 40,
    // height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    position: "relative",
    justifyContent: "center",
  },
  messageBubble: {
    backgroundColor: workerLoginDialogBox,
    padding: 10,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    position: "absolute",
  },
  messageText: {
    color: workerLoginDialog,
    fontSize: 16,
  },
})

export default LoginComponent
