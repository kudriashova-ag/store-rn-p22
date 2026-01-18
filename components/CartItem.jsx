import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../src/ui/Button/Button";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { RemoveFromCart, IncrementCount, DecrementCount } =
    useContext(CartContext);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={[styles.row, { gap: 8 , flexShrink: 0}]}>
          <Button
            text="-"
            variant="secondary"
            style={{ paddingVertical: 7, paddingHorizontal: 15 }}
            onPress={() => DecrementCount(item.id)}
          />
          <Text>{item.qty}</Text>
          <Button
            text="+"
            variant="secondary"
            style={{ paddingVertical: 7, paddingHorizontal: 15 }}
            onPress={() => IncrementCount(item.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3, // тінь Android
    shadowColor: "#000", // тінь iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  price: { fontSize: 16, fontWeight: "700", color: "#2563eb" },
});

export default CartItem;
