import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import CartProvider from "../contexts/CartContext";

const RootLayout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ title: "" }} />
      </Stack>
    </CartProvider>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
