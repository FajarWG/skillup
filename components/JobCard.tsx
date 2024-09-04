import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const JobCard = ({
  id,
  logo,
  jobTitle,
  companyName,
  location,
  jobType,
  jobLevel,
  salary,
}: {
  id: number;
  logo: string;
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  jobLevel: string;
  salary: string;
}) => {
  return (
    <TouchableOpacity onPress={() => router.navigate("/(root)/jobs-detail/1")}>
      <View className="w-full">
        <View className="flex flex-row items-center">
          <View className="p-3">
            <Image source={{ uri: logo }} className="w-10 h-10" />
          </View>
          <View className="ml-3">
            <Text className="text-neutral-900 font-semibold text-lg">
              {jobTitle}
            </Text>
            <Text className="text-neutral-700 text-sm">
              {companyName} • {location}
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-between p-3">
          <View className="flex flex-row gap-1">
            <Text className="text-primary-500 text-sm bg-primary-100 rounded-full px-4 py-1">
              {jobType}
            </Text>
            <Text className="text-primary-500 text-sm bg-primary-100 rounded-full px-4 py-1">
              {jobLevel}
            </Text>
          </View>
          <Text className="text-success-700 font-semibold text-base">
            Rp{" "}
            {salary
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              .slice(0, -6)}
            Jt
            <Text className="text-neutral-400 font-normal">/month</Text>
          </Text>
        </View>
      </View>

      <View className="w-full h-[2px] bg-neutral-200 mt-2" />
    </TouchableOpacity>
  );
};

export default JobCard;
