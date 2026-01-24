import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../data/products";
import Button from "../../src/ui/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/products.services";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const { addToCart, isInCart } = useContext(CartContext);
  const insets = useSafeAreaInsets();
  const router = useRouter();
  

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id
  })

  
  if(isLoading){
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View>
        <Text>Товар не знайдено</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scroll}>
        <View style={{ paddingBottom: 100 }}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text>{product.description}</Text>
        </View>
      </ScrollView>

      <View style={[styles.footer, { bottom: insets.bottom }]}>
        <Text>{product.price} грн</Text>
        <Button
          text={isInCart(product.id) ? "В кошику" : "Додати в кошик"}
          onPress={() => {
            addToCart(product);
            router.push("/cart")  }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    padding: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#ccc",
    width: "100%",
    padding: 12,
  },
  image: {
    width: "100%",
    height: 360,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2563eb",
  },
});

export default ProductScreen;
