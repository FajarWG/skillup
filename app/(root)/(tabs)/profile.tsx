import { DocumentUpload, Logout } from "iconsax-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

const Profile = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-row justify-between bg-primary-100 p-6">
        <Logout size={24} color="#D6E4FF" />

        <Text className="text-center text-xl font-medium ">Profile</Text>
        <TouchableOpacity
          onPress={() => {
            signOut();
            router.replace("/(auth)/welcome");
          }}
        >
          <Logout size={24} color="#FF472B" />
        </TouchableOpacity>
      </View>

      <View className="flex justify-center items-center w-full h-64 bg-primary-100">
        <View className="border-2 border-white w-24 h-24 rounded-full">
          <Text className="text-center my-auto text-primary-500 text-6xl font-extrabold">
            {user?.firstName?.slice(0, 2)}
          </Text>
        </View>
        <Text className="text-neutral-900 text-xl">{user?.firstName}</Text>
      </View>

      {/* <View className="mt-6 px-6">
        <Text className=" text-lg font-medium">
          Your CV
          <Text className="text-primary-500 text-sm font-medium"> 0/3</Text>
        </Text>

        <View className="w-full bg-[#ECF2FF] rounded-xl mt-5 p-[18px] border-dashed border border-primary-500">
          <View className="flex flex-row items-center">
            <View className="p-3 bg-primary-100 rounded-xl">
              <DocumentUpload size="28" color="#3366FF" variant="Bold" />
            </View>
            <View className="ml-4 text-center">
              <Text className="text-neutral-900 font-semibold text-lg">
                Uploud your CV ATS file
              </Text>
              <Text className="text-neutral-400 text-sm">
                Max. file size 10MB
              </Text>
            </View>
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;
