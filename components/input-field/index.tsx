import React from "react"
import { View, TextInput, StyleSheet } from "react-native"

interface InputFieldProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"
}

const InputField = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}: InputFieldProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor="#aaa"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
})

export default InputField
