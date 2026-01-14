import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: true,
      tabBarActiveTintColor: "tomato",
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if(route.name === "index") {
          iconName = "home-outline";
        } else if(route.name === "cart") {
          iconName = "cart-outline";
        } else if(route.name === "profile") {
          iconName ="person-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />
      }
    })}>
      <Tabs.Screen name="index" options={{ title: "Магазин" }} />
      <Tabs.Screen name="cart" options={{ title: "Кошик" }} />
      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
    </Tabs>
  );
};

export default TabsLayout;
