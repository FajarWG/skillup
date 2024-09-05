import Buttons from "@/components/Buttons";
import InputField from "@/components/InputField";

import { useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import {
  ArrowLeft2,
  Briefcase,
  InfoCircle,
  LampOn,
  Link,
} from "iconsax-react-native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import useUserDataStore from "@/lib/userdata";

const ResultCV = () => {
  const { user } = useUser();

  const [form, setForm] = useState({
    link: "",
    work: "",
  });

  const { setSkill }: any = useUserDataStore();

  const [scraping, setScraping] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScraping(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView className="py-6 bg-white h-full">
      {scraping ? (
        <View className="w-full h-full flex flex-col items-center justify-center">
          <View className="w-[80%] flex  flex-col items-center justify-center">
            <Image
              source={require("@/assets/images/datasent.png")}
              className="w-44"
            />
            <Text className="text-3xl font-medium mt-5">
              Your data has been saved
            </Text>
            <Text className="text-base text-neutral-500 text-center mt-4 mb-2">
              Wait a few seconds, the app is analyzing your CV
            </Text>
            <Progress.Bar progress={0.3} width={200} animated indeterminate />
          </View>
        </View>
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row items-center justify-end w-full px-6">
            <TouchableOpacity
              onPress={() => {
                router.navigate("/(root)/(tabs)/cv");
              }}
              className="mx-3"
            >
              <ArrowLeft2 size="24" color="#000" />
            </TouchableOpacity>
            <View className="w-[90%]">
              <Text className="text-center text-xl font-medium mr-[10%] ">
                Check Result
              </Text>
            </View>
          </View>

          <View className="px-6">
            <View className="flex flex-col items-center mt-5 p-3  rounded-lg ">
              <Progress.Circle
                size={120}
                progress={0.6}
                showsText
                thickness={10}
                strokeCap="round"
              />
              <Text className="text-neutral-900 font-semibold text-lg mt-3">
                Score CV
              </Text>
              <Text className="text-base">{user?.firstName}</Text>
            </View>
          </View>

          <View className="px-6 mt-6">
            <Text className="font-semibold text-neutral-900 text-lg">
              Work Experience
            </Text>
            <Text className="text-neutral-500 text-sm">
              Your work experience is solid, but needs to be reinforced with
              more specific achievements. For example, add details like
              “Successfully reduced system response time by 30% through backend
              optimization.”
            </Text>
            <View className="flex flex-row items-center mt-5 p-3  rounded-lg bg-[#FFF6C9] ">
              <LampOn className="mr-2" size="32" color="#FFD714" />
              <Text className="text-sm w-[90%] text-neutral-600">
                Improve the experience section by focusing more on the
                measurable results of your work.
              </Text>
            </View>
          </View>
          <View className="px-6 mt-6">
            <Text className="font-semibold text-neutral-900 text-lg">
              Skills
            </Text>
            <Text className="text-neutral-500 text-sm">
              The skills you listed are relevant, but we see you could add
              skills that are currently in high demand in Software Engineering
              such as Docker, Kubernetes, or CI/CD.
            </Text>
            <View className="flex flex-row items-center mt-5 p-3  rounded-lg bg-[#FFF6C9] ">
              <LampOn className="mr-2" size="32" color="#FFD714" />
              <Text className="text-sm w-[90%] text-neutral-600">
                Consider taking courses related to the skills mentioned above to
                increase your competitiveness.
              </Text>
            </View>
          </View>
          <View className="px-6 mt-6">
            <Text className="font-semibold text-neutral-900 text-lg">
              Format and Structure:
            </Text>
            <Text className="text-neutral-500 text-sm">
              Your CV has a good structure, but the spacing between sections
              could be widened slightly to make it easier to read. Also ensure
              consistency in the use of fonts and bullet points.
            </Text>
            <View className="flex flex-row items-center mt-5 p-3  rounded-lg bg-[#FFF6C9] ">
              <LampOn className="mr-2" size="32" color="#FFD714" />
              <Text className="text-sm w-[90%] text-neutral-600">
                Use bullet points consistently to separate achievements and
                responsibilities, and check the layout to make it more
                professional.
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ResultCV;
