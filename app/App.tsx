import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "../components/Themed";

const NativeStack = createNativeStackNavigator();
const TabNavigation = createBottomTabNavigator();
const DashboardStack = createNativeStackNavigator();
const ActivityStack = createNativeStackNavigator();

const TabOne = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello, this is tab one</Text>
    </View>
  );
};

const TabTwo = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello, this is tab two</Text>
    </View>
  );
};

const Dashboard = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="One" component={TabOne} />
    </DashboardStack.Navigator>
  );
};

const Activity = () => {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen name="Two" component={TabTwo} />
    </ActivityStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <TabNavigation.Navigator screenOptions={{ headerShown: false }}>
      <TabNavigation.Screen name="Dashboard" component={Dashboard} />
      <TabNavigation.Screen name="Activity" component={Activity} />
    </TabNavigation.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator screenOptions={{ headerShown: false }}>
        <NativeStack.Screen name="Tabs" component={Tabs} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
