import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Pressable, Text } from "react-native";


const TabsLayout = () => {
  const { totalCount, ClearCart } = useContext(CartContext);
  
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: "tomato",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "index") {
            iconName = "home-outline";
          } else if (route.name === "cart") {
            iconName = "cart-outline";
          } else if (route.name === "profile") {
            iconName = "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Магазин" }} />
      
        <Tabs.Screen
          name="cart"
          options={{
            title: "Кошик",
            tabBarBadge: totalCount > 0 ? totalCount : undefined,
            headerRight: () => (
              <Pressable onPress={ClearCart} style={{ padding: 5 }}>
                <Ionicons name="trash-outline" size={30} color="black" />
              </Pressable>
            ),
          }}
        />
      
      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
    </Tabs>
  );
};

export default TabsLayout;
