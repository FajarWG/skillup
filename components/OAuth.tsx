import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Alert, Image, Text, View } from "react-native";

import { googleOAuth } from "@/lib/auth";
import { Google } from "iconsax-react-native";
import Buttons from "./Buttons";

const OAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = async () => {
    const result = await googleOAuth(startOAuthFlow);

    if (result.code === "session_exists") {
      Alert.alert("Success", "Session exists. Redirecting to home screen.");
      router.replace("/(root)/(tabs)/home");
    }

    Alert.alert(result.success ? "Success" : "Error", result.message);
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-neutral-300" />
        <Text className="text-sm text-neutral-500">Or With Account</Text>
        <View className="flex-1 h-[1px] bg-neutral-300" />
      </View>

      <View className="flex flex-row justify-center">
        <Buttons
          title="Google"
          className="mt-5 w-full flex flex-row justify-center rounded-lg mr-4"
          IconLeft={() => (
            <Image
              source={require("../assets/icons/google.png")}
              className="w-7 h-7 mr-2"
            />
          )}
          variant="outline"
          textVariant="primary"
          onPress={handleGoogleSignIn}
        />
        {/* <Buttons
          title="LinkedIn"
          className="mt-5 w-40 shadow-none flex flex-row justify-center rounded-lg"
          IconLeft={() => (
            <Image
              source={require("../assets/icons/linkedin.png")}
              className="w-5 h-5 mr-2"
            />
          )}
          variant="outline"
          textVariant="primary"
          onPress={handleGoogleSignIn}
        /> */}
      </View>
    </View>
  );
};

export default OAuth;
