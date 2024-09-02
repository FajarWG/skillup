import InputField from "@/components/InputField";
import JobCard from "@/components/JobCard";
import { jobList } from "@/constants";
import { router } from "expo-router";
import { ArrowLeft2, SearchNormal } from "iconsax-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="py-6 bg-white">
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
            <InputField
              label=""
              placeholder="Search Job"
              icon={<SearchNormal size="20" color="#9CA3AF" />}
              textContentType="emailAddress"
              value={search}
              onChangeText={(value) => setSearch(value)}
            />
          </View>
        </View>

        <Text className="py-2 px-6 border border-neutral-200  bg-neutral-100 text-sm text-neutral-500 font-medium mb-5">
          Featuring 120+ jobs
        </Text>

        <View className="px-6">
          {jobList.map((job, index) => (
            <JobCard
              key={index}
              logo={job.logo}
              jobTitle={job.jobTitle}
              companyName={job.companyName}
              location={job.location}
              jobType={job.jobType}
              jobLevel={job.jobLevel}
              salary={job.salary}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
