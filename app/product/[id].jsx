import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PRODUCTS } from '../../data/products';

const ProductScreen = () => {
    const { id } = useLocalSearchParams();

    const product = PRODUCTS.find((product) => product.id === id);

    if (!product) {
        return (
            <View>
                <Text>Товар не знайдено</Text>
            </View>
        );
    }

    return (
        <View>
            <Image source={{ uri: product.image }} />
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Text>{product.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProductScreen;
