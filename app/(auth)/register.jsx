import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../../src/ui/TextInput/AppTextInput";
import Button from "../../src/ui/Button/Button";
import Separator from "../../src/ui/Separator/Separator";
import { useAuth } from "../../contexts/AuthContext";

const Register = ({ onSwitch }) => {
  const { login, register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleLogin = async () => {
    if (!email) setErrorEmail("Email обов'язковий");
    else setErrorEmail(null);
    if (!password) setErrorPassword("Пароль обов'язковий");
    else setErrorPassword(null);
    if (!name) setErrorName("Ім'я обов'язковий");
    else setErrorName(null);
    if (!email || !password || !name) return;

    try {
      await register({name, email, password});
      await login({email, password});
    } catch {
      Alert.alert("Помилка", "Невірні данні");
    }
  };
  return (
    <View style={styles.container}>
      <AppTextInput
        label="Name"
        placeholder="Введіть ім'я"
        value={name}
        onChangeText={setName}
        error={errorName}
      />
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
      <Button text="Зареєструватися" onPress={handleLogin} />
      <Separator height={26} />
      <Button
        text="Є акаунт? Увійти"
        variant="secondary"
        onPress={onSwitch}
      />
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

export default Register;
