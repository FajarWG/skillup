import Buttons from "@/components/Buttons";
import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Buttons
          onPress={() => {
            signOut();
            router.replace("/(auth)/welcome");
          }}
          title="Sign Out"
        />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text className="text-red-500">Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  );
};

export default Home;
