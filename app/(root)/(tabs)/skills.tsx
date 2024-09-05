import Buttons from "@/components/Buttons";
import InputField from "@/components/InputField";
import JobCard from "@/components/JobCard";
import Task from "@/components/TaskList";
import { jobList } from "@/constants";
import useUserDataStore from "@/lib/userdata";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link, Redirect, router } from "expo-router";
import { AddSquare, Code, MinusSquare, TickCircle } from "iconsax-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Skill = () => {
  const { user } = useUser();

  const [recommended, setRecommended] = useState([
    "Web Development",
    "JavaScript",
    "React",
    "React Native",
  ]);

  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState(["HTML", "CSS"]);
  const [addSkill, setAddSkill] = useState(false);

  const handleAddTask = () => {
    Keyboard.dismiss();

    if (task === "") {
      ToastAndroid.show(
        "The skill you wrote is still empty",
        ToastAndroid.SHORT
      );
      return;
    }

    Alert.alert(
      `Are you sure you've learned this ${task}`,
      "You can't bring this back to the way it was before.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes, I've learned it",
          onPress: () => {
            setTaskItems([...taskItems, task]);
            setTask("");
          },
        },
      ]
    );
  };

  const completeTask = (index: number) => {
    Alert.alert(
      "Are you sure you've learned it?",
      "You can't bring this back to the way it was before.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes, I've learned it",
          onPress: () => {
            let recommendedCopy = [...recommended];
            recommendedCopy.splice(index, 1);
            setTaskItems([...taskItems, recommended[index]]);
            setRecommended(recommendedCopy);
          },
        },
      ]
    );
  };

  const { skill }: any = useUserDataStore();

  if (skill == null) {
    return <Redirect href="/(root)/set-skill" />;
  }

  return (
    <SafeAreaView className="p-6 bg-white">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="no-scrollbar"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <SignedIn>
          <View>
            <Text className=" text-2xl font-medium">
              Hi, {(user as any)?.firstName}👋
            </Text>
            <Text className="mt-2 text-sm font-medium text-neutral-500">
              Improve your skills to be the best
            </Text>
          </View>
          {/* Your Skill */}
          <View className="mt-6">
            <Text className=" text-lg font-medium">Your Skill</Text>

            <View className="w-full bg-primary-900 rounded-xl mt-5 p-[18px]">
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row align-middle items-center">
                  <View className="p-3 bg-white rounded-xl">
                    <Code size="28" color="#292D32" />
                  </View>
                  <View className="ml-4">
                    <Text className="text-white font-semibold text-lg">
                      {skill.work}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text className="text-neutral-400 font-medium text-sm">
                    Score:
                  </Text>
                  <Text className="text-white text-xl font-semibold">
                    20
                    <Text className="text-xs leading-6">/100</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Job Trends */}
          <View className="mt-6">
            <View className="flex flex-row justify-between">
              <Text className=" text-lg font-medium mb-2">
                Skill recommendations to learn
              </Text>
            </View>
            {/* Job Card */}
            {recommended.map((skill, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={skill} />
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-3">
            <View className="flex flex-row justify-between">
              <Text className=" text-lg font-medium mb-5">Your Skill</Text>
              <TouchableOpacity
                onPress={() => {
                  setAddSkill(!addSkill);
                }}
              >
                {addSkill ? (
                  <MinusSquare size="24" color="#000" />
                ) : (
                  <AddSquare size="24" color="#000" />
                )}
              </TouchableOpacity>
            </View>
            {addSkill && (
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
              >
                <TextInput
                  style={styles.input}
                  placeholder={"Write your skill"}
                  value={task}
                  onChangeText={(text) => setTask(text)}
                />

                <TouchableOpacity onPress={() => handleAddTask()}>
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            )}
            <View className="flex gap-1">
              {/* This is where the tasks will go! */}
              {taskItems.map((item, index) => {
                return <Task mode={"done"} text={item} key={index} />;
              })}
            </View>
          </View>
          <View className="h-16"></View>
        </SignedIn>
        <SignedOut>
          <View className="w-full flex items-center justify-center align-middle">
            <ActivityIndicator size="large" color="#3366FF" />
          </View>
        </SignedOut>
      </ScrollView>
      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "75%",
  },
  addWrapper: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: "#3366FF",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    color: "#FFF",
  },
});

export default Skill;
