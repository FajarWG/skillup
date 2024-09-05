import InputField from "@/components/InputField";
import JobCard from "@/components/JobCard";
import { jobList } from "@/constants";
import { router } from "expo-router";
import { ArrowLeft2, SearchNormal } from "iconsax-react-native";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

const JobsDetail = () => {
  const { slug } = useLocalSearchParams();

  const data = jobList[slug as keyof typeof jobList] as any;

  const [search, setSearch] = useState("");

  const [tabs, setTabs] = useState(false);

  return (
    <SafeAreaView className="py-6 bg-white h-full">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row items-center justify-end w-full px-6">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="mx-3"
          >
            <ArrowLeft2 size="24" color="#000" />
          </TouchableOpacity>
          <View className="w-[90%]">
            <Text className="text-center text-xl font-medium ">
              Jobs Detail
            </Text>
          </View>
        </View>

        <View className="px-6">
          <View className="flex flex-col justify-center items-center w-full p-3 mt-8">
            <Image source={{ uri: data.logo }} className="w-14 h-14" />
            <Text className="text-neutral-900 font-semibold text-xl mt-3">
              {data.jobTitle}
            </Text>
            <Text className="text-neutral-700 text-sm mt-1">
              {data.companyName} • {data.location}
            </Text>
          </View>

          <View className="flex flex-row mt-5 justify-between items-center w-full bg-neutral-100 p-1 rounded-full">
            <Text
              className={
                tabs
                  ? "text-black w-1/2 text-center"
                  : "bg-info-900 text-white w-1/2 text-center h-full p-3 rounded-full"
              }
              onPress={() => setTabs(!tabs)}
            >
              Description
            </Text>
            <Text
              className={
                !tabs
                  ? "text-black w-1/2 text-center"
                  : "bg-info-900 text-white w-1/2 text-center h-full p-3 rounded-full"
              }
              onPress={() => setTabs(!tabs)}
            >
              Company
            </Text>
          </View>

          <View className="mt-3">
            {!tabs ? (
              <View>
                <Text className="text-neutral-900 font-semibold text-base">
                  Job Description
                </Text>
                <Text className="text-neutral-700 mt-2">
                  {data.description}
                </Text>

                <Text className="text-neutral-900 font-semibold text-base mt-5">
                  Requirements
                </Text>
                <Text className="text-neutral-700 mt-2">
                  {data.skillRequired}
                </Text>
              </View>
            ) : (
              <View>
                <Text className="text-neutral-900 font-semibold text-lg">
                  Company
                </Text>
                <Text className="text-neutral-700 mt-2">{data.company}</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JobsDetail;
