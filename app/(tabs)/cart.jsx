import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CartContext } from '../../contexts/CartContext';

const CartScreen = () => {
    const { items } = useContext(CartContext);

    return (
        <View>
            <Text>Cart</Text>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.qty} шт</Text>
                    </View>
                )} />

        </View>
    );
}

const styles = StyleSheet.create({})

export default CartScreen;
