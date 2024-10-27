/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Routes from "./src/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Routes />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
