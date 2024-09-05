import Buttons from "@/components/Buttons";
import JobCard from "@/components/JobCard";
import { jobList } from "@/constants";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { Code } from "iconsax-react-native";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";

import { SafeAreaView } from "react-native-safe-area-context";
import useUserDataStore from "@/lib/userdata";

const Home = () => {
  const { user } = useUser();

  const { skill }: any = useUserDataStore();

  return (
    <SafeAreaView className="p-6 bg-white">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="no-scrollbar"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SignedIn>
          <View>
            <Text className=" text-2xl font-medium">
              Hi, {user?.firstName}👋
            </Text>
            <Text className="mt-2 text-sm font-medium text-neutral-500">
              Create a better future for yourself here
            </Text>
          </View>
          {/* Your Skill */}
          <View className="mt-6">
            <Text className=" text-lg font-medium">Your Skill</Text>

            <View className="w-full bg-primary-900 rounded-xl mt-5 p-[18px]">
              {skill === null && (
                <BlurView
                  intensity={100}
                  tint="dark"
                  className="absolute top-0 left-0 right-0 bottom-0 rounded-xl z-10 flex items-center justify-center"
                >
                  <Text className="text-white font-semibold text-center p-5">
                    You haven't added a LinkedIn account on the skills page,
                    please add it to get skill recommendations.
                  </Text>
                  <Buttons
                    className="px-4 py-2 w-40"
                    title="Add LinkedIn"
                    onPress={() => {
                      router.replace("/(root)/(tabs)/skills");
                    }}
                  />
                </BlurView>
              )}
              <View className="flex flex-row items-center">
                <View className="p-3 bg-white rounded-xl">
                  <Code size="28" color="#292D32" />
                </View>
                {skill == null ? (
                  <View className="ml-4">
                    <Text className="text-white font-semibold text-lg">
                      No Skill Added
                    </Text>
                    <Text className="text-neutral-400 text-sm">
                      Add your LinkedIn account to get skill recommendations
                    </Text>
                  </View>
                ) : (
                  <View className="ml-4">
                    <Text className="text-white font-semibold text-lg">
                      {skill.work}
                    </Text>
                    <Text className="text-neutral-400 text-sm">
                      There are 3 suggestions to learn
                    </Text>
                  </View>
                )}
              </View>

              <View className="flex flex-row justify-between mt-5">
                <View className="flex flex-row gap-2 align-middle items-center">
                  <View>
                    <Text className="text-neutral-400 font-medium text-sm">
                      Your Score:
                    </Text>
                    {skill == null ? (
                      <Text className="text-white text-xl font-semibold">
                        0<Text className="text-xs leading-6">/100</Text>
                      </Text>
                    ) : (
                      <Text className="text-white text-xl font-semibold">
                        20
                        <Text className="text-xs leading-6">/100</Text>
                      </Text>
                    )}
                  </View>
                </View>

                <Buttons
                  className="px-4 py-2 w-24"
                  title="Check"
                  onPress={() => {
                    router.replace("/(root)/(tabs)/skills");
                  }}
                />
              </View>
            </View>
          </View>
          {/* Job Trends */}
          <View className="mt-6">
            <View className="flex flex-row justify-between">
              <Text className=" text-lg font-medium mb-5">Job Trends</Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/(root)/(tabs)/jobs");
                }}
              >
                <Text className="text-primary-500 text-sm font-medium">
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            {/* Job Card */}
            {jobList.map((job, index) => (
              <JobCard
                id={job.id}
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
          <View className="h-16"></View>
        </SignedIn>
        <SignedOut>
          <View className="w-full flex items-center justify-center align-middle">
            <ActivityIndicator size="large" color="#3366FF" />
          </View>
        </SignedOut>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
