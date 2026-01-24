import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products.services";
import { RefreshControl } from "react-native-gesture-handler";

const HomeScreen = () => {
  const router = useRouter();

  const {data: products=[], isLoading, isRefetching, refetch} = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onProductPress={() => router.push(`/product/${item.id}`)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});

export default HomeScreen;
