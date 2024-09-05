import Buttons from "@/components/Buttons";
import InputField from "@/components/InputField";

import { useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { ArrowLeft2, Briefcase, InfoCircle, Link } from "iconsax-react-native";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import useUserDataStore from "@/lib/userdata";

const SetSkill = () => {
  const { user } = useUser();

  const [form, setForm] = useState({
    link: "",
    work: "",
  });

  const { setSkill }: any = useUserDataStore();

  const [scraping, setScraping] = useState(false);

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
              Wait a few seconds, the app is looking at your linkedin data
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
                router.navigate("/(root)/(tabs)/home");
              }}
              className="mx-3"
            >
              <ArrowLeft2 size="24" color="#000" />
            </TouchableOpacity>
            <View className="w-[90%]">
              <Text className="text-center text-xl font-medium mr-[10%] ">
                Skill Filling
              </Text>
            </View>
          </View>

          <View className="px-6">
            <View className="flex flex-row items-center mt-5 p-3 border rounded-lg bg-primary-100 border-primary-500">
              <InfoCircle className="mr-2" size="32" color="#3366FF" />
              <Text className="text-base w-[90%]">
                This is the first stage to see your current skill deficiencies,
                after submitting LinkedIn data, we will process the data in a
                few minutes to get the best results.
              </Text>
            </View>

            <Image
              source={require("@/assets/icons/linkedin.png")}
              className="w-12 h-12 mt-4 ml-2"
            />

            <View className="w-full px-2">
              <InputField
                label="Username LinkedIn"
                placeholder="Fill your linkedin username"
                icon={<Link size="20" color="#9CA3AF" />}
                textContentType={"URL"}
                value={form.link}
                onChangeText={(value) => setForm({ ...form, link: value })}
              />

              <InputField
                label="Type of Work"
                placeholder="Fill your type of work"
                icon={<Briefcase size="20" color="#9CA3AF" />}
                textContentType="text"
                value={form.work}
                onChangeText={(value) => setForm({ ...form, work: value })}
              />
            </View>

            <Buttons
              title="Submit"
              className="mt-6"
              onPress={() => {
                setScraping(true);
                setTimeout(() => {
                  setSkill({
                    link: form.link,
                    work: form.work,
                  });
                  router.navigate("/(root)/(tabs)/skills");
                }, 5000);
              }}
            />

            {/* <View className="flex flex-col justify-center items-center w-full p-3 mt-8">
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
                  Skill Required
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
          </View> */}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SetSkill;
