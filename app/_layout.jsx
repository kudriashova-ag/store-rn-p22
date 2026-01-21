import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import CartProvider from "../contexts/CartContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const NavigationLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="product/[id]" options={{ title: "" }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <CartProvider>
        <NavigationLayout />
      </CartProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
