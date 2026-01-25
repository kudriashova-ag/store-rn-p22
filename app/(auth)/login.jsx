import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../../src/ui/TextInput/AppTextInput";
import Button from "../../src/ui/Button/Button";
import Separator from "../../src/ui/Separator/Separator";
import { useAuth } from "../../contexts/AuthContext";

const Login = ({ onSwitch }) => {
    const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleLogin = async () => {
    if (!email) setErrorEmail("Email обов'язковий");
    else setErrorEmail(null);
    if (!password) setErrorPassword("Пароль обов'язковий");
    else setErrorPassword(null);
    if (!email || !password) return;

    try {
      await login({email, password});
    } catch {
      Alert.alert("Помилка", "Невірні данні");
    }
  };
  return (
    <View style={styles.container}>
      <AppTextInput
        label="Email"
        placeholder="Введіть email"
        value={email}
        onChangeText={setEmail}
        error={errorEmail}
      />
      <AppTextInput
        label="Пароль"
        placeholder="Введіть пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={errorPassword} // тут можна передавати помилку
      />
      <Button text="Увійти" onPress={handleLogin} />
      <Separator height={26} />
      <Button text="Немає акаунта? Зареєструватися" variant="secondary" onPress={onSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    padding: 16,
  },
});

export default Login;
