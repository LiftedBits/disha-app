import React from "react"
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { BottomSheet } from "react-native-btr"
import DishaLogo from "../../assets/images/disha_logo.png"
import BottomCard from "../../components/bottom-card"
import { formBackground } from "../../config/colors"

const LoginScreen = () => {
  const [visible, setVisible] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const toggleBottomNavigationView = () => {
    setVisible(!visible)
  }

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={DishaLogo} style={styles.logo} />
      </View>

      {/* <Text style={styles.backgroundMessage}>Welcome to our App!</Text>

      <Button onPress={toggleBottomNavigationView} title="Login" /> */}

      <BottomCard />

      {/* <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomSheet}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* <ButtonLogin /> */}

      {/*<TouchableOpacity
            onPress={() => console.log("Forgot Password Pressed")}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: formBackground,
  },
  banner: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "45%",
    objectFit: "scale-down",
  },
  backgroundMessage: {
    position: "absolute",
    top: 220,
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 16,
    height: 300,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  forgotPassword: {
    marginTop: 16,
    color: "#007bff",
    textAlign: "center",
  },
})

export default LoginScreen
