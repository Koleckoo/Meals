import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function DrawerNavigator() {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: "#3f2f25" }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
          shadowOffset: { width: 0, height: 0 },
          elevation: 0,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#351401",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="category"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="star"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{
              headerShown: false,
            }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="MealsOverview"
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealsDetail"
            component={MealDetailsScreen}
            options={{
              title: "Meal Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
