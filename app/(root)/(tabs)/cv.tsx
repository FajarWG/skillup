import Buttons from "@/components/Buttons";
import CVHistoryCard from "@/components/CVHistoryCard";
import InputField from "@/components/InputField";
import { cvHistory, jobList } from "@/constants";
import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { Code, DocumentCloud, DocumentUpload } from "iconsax-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import * as DocumentPicker from "expo-document-picker";

const CV = () => {
  const [description, setDescription] = useState("");

  const [fileCV, setFileCV] = useState(null) as any;

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (!result.canceled) {
      setFileCV(result);
    }
  };

  return (
    <SafeAreaView className="p-6 bg-white">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SignedIn>
          <View>
            <Text className=" text-2xl font-medium">Screaning CV📋</Text>
            <Text className="mt-2 text-sm font-medium text-neutral-500">
              Check your readiness before applying for a job
            </Text>
          </View>
          {/* Your Skill */}
          <View className="mt-6">
            <Text className=" text-lg font-medium">
              Check Your CV by AI
              <Text className="text-primary-500 text-sm font-medium">
                {" "}
                - 1 Times Left
              </Text>
            </Text>

            <TouchableOpacity onPress={() => _pickDocument()}>
              <View className="w-full bg-[#ECF2FF] rounded-xl mt-5 p-[18px] border-dashed border border-primary-500">
                <View className="flex flex-row items-center">
                  <View className="p-3 bg-primary-100 rounded-xl">
                    <DocumentUpload size="28" color="#3366FF" variant="Bold" />
                  </View>
                  <View className="ml-4 text-center">
                    {fileCV !== null ? (
                      <Text className="text-neutral-900 font-semibold text-lg">
                        {fileCV.assets[0].name || "Uploud your CV ATS file"}
                      </Text>
                    ) : (
                      <>
                        <Text className="text-neutral-900 font-semibold text-lg">
                          Uploud your CV ATS file
                        </Text>
                        <Text className="text-neutral-400 text-sm">
                          Max. file size 10MB
                        </Text>
                      </>
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {/* <InputField
              label="Job Description"
              labelAddOn="(optional)"
              placeholder="Job description of the job posting"
              textContentType="textArea"
              value={description}
              className="h-56"
              multiline={true}
              onChangeText={(value) => setDescription(value)}
            /> */}
            <Buttons
              title="Check"
              disabled={fileCV === null}
              onPress={() => {
                router.push("/(root)/results-cv");
              }}
              className="mt-2"
            />
          </View>
          {/* History CV */}
          <View className="mt-6">
            <View className="flex flex-row justify-between">
              <Text className=" text-lg font-medium mb-5">History</Text>
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
            {/* CVHistory Card */}
            {cvHistory.map((cv, index) => (
              <CVHistoryCard
                key={index}
                title={cv.title}
                date={cv.date}
                score={cv.score}
              />
            ))}
          </View>
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

export default CV;
