import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../src/ui/Button/Button";
import { CartContext } from "../contexts/CartContext";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const RightAction = ({ item, progress }) => { 
  const { RemoveFromCart } = useContext(CartContext);

  const animatedStyle = useAnimatedStyle(() => { 
    return {
      opacity: progress.value ? progress.value : 0,
      tranform: [{scale: progress.value ? progress.value : 1}]
    };
  })

  
  return (
    <View
      style={{
        alignItems: "flex-end",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <Reanimated.View style={animatedStyle}>
        <Button
          icon={<Ionicons name="trash-outline" size={30} color="white" />}
          variant="none"
          onPress={() => RemoveFromCart(item.id)}
        />
      </Reanimated.View>
    </View>
  );
}


const CartItem = ({ item }) => {
  const { IncrementCount, DecrementCount } =
    useContext(CartContext);

  return (
    <ReanimatedSwipeable renderRightActions={(progress)=><RightAction item={item}  progress={progress}/>}>
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
    </ReanimatedSwipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
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
