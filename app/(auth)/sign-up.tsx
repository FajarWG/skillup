import { useSignUp } from "@clerk/clerk-react";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ReactNativeModal } from "react-native-modal";
import {
  ArrowLeft,
  Lock,
  Profile,
  Sms,
  TickCircle,
} from "iconsax-react-native";

import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";

import { fetchAPI } from "@/lib/fetch";
import Buttons from "@/components/Buttons";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending",
      });
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };
  const onPressVerify = async () => {
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });
      if (completeSignUp.status === "complete") {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
        });
      } else {
        setVerification({
          ...verification,
          error: "Verification failed. Please try again.",
          state: "failed",
        });
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
    }
  };
  return (
    <SafeAreaView className="flex h-full items-center bg-white px-6">
      <View>
        <View className="flex flex-row items-center justify-center w-full px-8 pr-8">
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
          className=" text-sm text-center font-medium text-neutral-400 mt-10"
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
      <ReactNativeModal
        isVisible={verification.state === "pending"}
        // onBackdropPress={() =>
        //   setVerification({ ...verification, state: "default" })
        // }
        onModalHide={() => {
          if (verification.state === "success") {
            setShowSuccessModal(true);
          }
        }}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text className="font-bold text-2xl mb-2">Verification</Text>
          <Text className=" mb-5">
            We've sent a verification code to {form.email}
          </Text>
          <InputField
            label={"Code"}
            icon={<Lock size="20" color="#9CA3AF" className="mr-2" />}
            placeholder={"••••"}
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code: any) =>
              setVerification({ ...verification, code })
            }
          />
          {verification.error && (
            <Text className="text-red-500 text-sm mt-1">
              {verification.error}
            </Text>
          )}
          <Buttons
            title="Verify Email"
            onPress={onPressVerify}
            className="mt-5 bg-success-500"
          />
        </View>
      </ReactNativeModal>
      <ReactNativeModal isVisible={showSuccessModal}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <TickCircle size="110" color="#10B981" className="mx-auto my-5" />
          <Text className="text-3xl font-semibold text-center">Verified</Text>
          <Text className="text-base text-gray-400 text-center mt-2">
            You have successfully verified your account.
          </Text>
          <Buttons
            title="Browse Home"
            onPress={() => router.push(`/(root)/(tabs)/home`)}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};
export default SignUp;
