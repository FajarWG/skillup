import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import Buttons from "@/components/Buttons";
import { ArrowLeft, Lock, Sms } from "iconsax-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);

  return (
    <SafeAreaView className="flex h-full items-center bg-white px-6">
      <View>
        <View className="flex flex-row items-center justify-center w-full px-8 pr-8">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="w-full flex items-start p-5"
          >
            <ArrowLeft size="24" color="#292D32" />
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[61px] h-[19px]"
          />
        </View>

        <View className="w-full mt-10 px-6">
          <Text className="text-[28px] text-neutral-900 font-medium">
            Login Your Account
          </Text>
          <Text className="text-base text-neutral-500 font-normal">
            Please login to find your dream job
          </Text>
        </View>
      </View>
      <View className="w-full px-2 mt-11">
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={<Sms size="20" color="#9CA3AF" />}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />

        <InputField
          label="Password"
          placeholder="Enter password"
          icon={<Lock size="20" color="#9CA3AF" />}
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />

        <View className="w-full relative pb-0">
          <Link
            href="/sign-up"
            className=" text-sm text-center font-medium text-neutral-400 mt-10"
          >
            Dont’t have an account?{" "}
            <Text className="text-primary-500 font-medium">Register</Text>
          </Link>
          <Buttons title="Sign In" onPress={onSignInPress} className="mt-6" />

          <OAuth />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

{
  /* <SafeAreaView className="flex h-full items-center bg-white px-6">
      <View>
        <View className="flex flex-row items-center justify-center w-full px-6 pr-12">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/welcome");
            }}
            className="w-full flex items-start p-5"
          >
            <ArrowLeft size="24" color="#292D32" />
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[61px] h-[19px]"
          />
        </View>

        <View className="w-full mt-10 px-6">
          <Text className="text-[28px] text-neutral-900 font-medium">
            Create Your Account
          </Text>
          <Text className="text-base text-neutral-500 font-normal">
            Please create an account to find your dream job
          </Text>
        </View>
      </View>
      <View className="w-full px-2">
        <InputField
          label="Name"
          placeholder="Enter name"
          icon={<Profile size="20" color="#9CA3AF" />}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={<Sms size="20" color="#9CA3AF" />}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={<Lock size="20" color="#9CA3AF" />}
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
        />
      </View>
      <View className="w-full mt-20 px-2">
        <Link
          href="/sign-in"
          className="text-lg text-center text-general-200 mt-10"
        >
          Already have an account?{" "}
          <Text className="text-primary-500">Log In</Text>
        </Link>
        <Buttons
          title="Create Account"
          onPress={onSignUpPress}
          className="mt-6"
        />
        <OAuth />
      </View>

// </SafeAreaView> */
}
