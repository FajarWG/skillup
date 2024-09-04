import { Stack } from "expo-router";

export default function JobsLayout() {
  return (
    <Stack>
      <Stack.Screen name="[slug]" options={{ headerShown: false }} />
    </Stack>
  );
}
