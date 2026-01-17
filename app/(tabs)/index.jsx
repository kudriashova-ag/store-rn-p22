import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
    const router = useRouter();
    
    return (
      <View>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
              <ProductCard product={item} onProductPress={ ()=>router.push(`/product/${item.id}`)} />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 12
  }
})

export default HomeScreen;
