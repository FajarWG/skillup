import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="search" options={{ headerShown: false }} />
      <Stack.Screen name="jobs-detail" options={{ headerShown: false }} />
      <Stack.Screen name="set-skill" options={{ headerShown: false }} />
      <Stack.Screen name="results-cv" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
