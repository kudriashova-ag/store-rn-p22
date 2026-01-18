import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../../components/CartItem';

const CartScreen = () => {
    const {
      items,
      totalPrice
    } = useContext(CartContext);


    if(items.length === 0) {
        return (
            <View>
                <Text>Кошик порожній</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CartItem item={item} />
                )} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CartScreen;
