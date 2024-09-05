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
            <Text className=" text-neutral-900 text-sm">
              From the comparison between the job description and the keywords
              of the CV, there are some matches and mismatches:
            </Text>
            <Text className="font-semibold text-neutral-900 text-lg mt-2">
              Matches:
            </Text>
            <Text className="text-neutral-500 text-sm">
              1. There is some overlap between the skills requested in the job
              description and some keywords in the CV, such as business
              analytics, business process, and process improvements.
            </Text>
            <Text className="text-neutral-500 text-sm">
              2. There are some related keywords such as risk management,
              compliance, and financial industry that could relate to the needs
              in business management and financial aspects.
            </Text>
          </View>
          <View className="px-6 mt-6">
            <Text className="font-semibold text-neutral-900 text-lg">
              Mismatch:
            </Text>
            <Text className="text-neutral-500 text-sm">
              1. Most of the keywords in the CV are related to risk management,
              banking, and financial management, while the job description
              emphasizes more on technical skills such as APIs, Microservices,
              and Stream Processing which are not covered in the CV.
            </Text>
            <Text className="text-neutral-500 text-sm">
              2. There are no keywords that clearly refer to IT technology and
              architecture such as Service-Oriented Architecture (SOA) requested
              in the job description.
            </Text>
            <View className="flex flex-row items-center mt-5 p-3  rounded-lg bg-[#FFF6C9] ">
              <LampOn className="mr-2" size="32" color="#FFD714" />

              <Text className="text-sm w-[90%] font-semibold text-neutral-600">
                To improve suitability, it is recommended to add more specific
                keywords related to APIs, Microservices, and Stream Processing
                to the CV.
              </Text>
            </View>
            <View className="flex flex-row items-center mt-2 p-3  rounded-lg bg-[#FFF6C9] ">
              <LampOn className="mr-2" size="32" color="#FFD714" />

              <Text className="text-sm w-[90%] font-semibold text-neutral-600 mt-1">
                Highlighting experience or skills relevant to Application
                Programming Interfaces (API) or Service-Oriented Architecture
                (SOA) in the CV can help improve the fit.
              </Text>
            </View>
            <View className="flex flex-row items-center mt-2 p-3  rounded-lg bg-[#FFF6C9] ">
              <LampOn className="mr-2" size="32" color="#FFD714" />

              <Text className="text-sm w-[90%] font-semibold text-neutral-600 mt-1">
                Including education or training related to IT technology and
                architecture in your CV can also send a positive signal to
                recruiters.
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ResultCV;
