import Buttons from "@/components/Buttons";
import { BarChart } from "react-native-gifted-charts";
import CVHistoryCard from "@/components/CVHistoryCard";
import InputField from "@/components/InputField";
import { cvHistory, jobList } from "@/constants";
import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import {
  ArrowDown,
  ArrowDown2,
  Briefcase,
  Code,
  DocumentCloud,
  DocumentUpload,
  SearchNormal,
} from "iconsax-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import { SafeAreaView } from "react-native-safe-area-context";
import JobCard from "@/components/JobCard";

const Jobs = () => {
  const [description, setDescription] = useState("");

  // change color of front bar, dari biru gelap jadi biru muda

  const barData = [
    {
      value: 50,
      label: "Front End",
      frontColor: "#254EDB",
    },
    {
      value: 30,
      label: "Back End",
      frontColor: "#3366FF",
    },
    {
      value: 25,
      label: "Dev Ops",
      frontColor: "#6690FF",
    },
    {
      value: 20,
      label: "Cyber Sec",
      frontColor: "#84A9FF",
    },
    {
      value: 10,
      label: "Database",
      frontColor: "#A2C3FF",
    },
    {
      value: 8,
      label: "UI/UX",
      frontColor: "#C0DCFF",
    },
    {
      value: 5,
      label: "QA",
      frontColor: "#E0F3FF",
    },
  ];

  const categoryJobs = [
    {
      title: "Website",
    },
    {
      title: "Mobile",
    },
    {
      title: "Data",
    },
    {
      title: "Game",
    },
    {
      title: "UI/UX",
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="p-6 bg-white">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SignedIn>
          <View>
            <Text className=" text-2xl font-medium">Job Trends💼</Text>
            <Text className="mt-2 text-sm font-medium text-neutral-500">
              Insights into current job market trends
            </Text>
          </View>

          <SelectDropdown
            data={categoryJobs}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Briefcase size={20} color="#111827" />
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || "Select your mood"}
                  </Text>
                  {/* <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} /> */}
                  <ArrowDown2 size={20} color="#111827" />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
          {/* Bar Chart */}
          <View className="p-3 rounded-lg border border-gray-200">
            <View className="px-2">
              <Text className=" text-sm font-medium">Total Job Vacancies</Text>
              <Text className="text-2xl font-bold text-neutral-900">
                5.987,34
              </Text>
              <Text className=" text-xs text-gray-600 font-medium">
                Sunday, 20 April 2024
              </Text>

              <View className="border-b border-gray-200 mt-4"></View>
            </View>

            <BarChart
              barWidth={22}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              rotateLabel
              data={barData}
              labelsExtraHeight={60}
              yAxisThickness={0}
              xAxisThickness={0}
              labelWidth={50}
              showValuesAsTopLabel
            />
          </View>
          {/* Your Skill */}

          <View className="mt-6">
            <InputField
              label=""
              placeholder="Search Job"
              icon={<SearchNormal size="20" color="#9CA3AF" />}
              textContentType="emailAddress"
              value={search}
              onChangeText={(value) => setSearch(value)}
            />
            <View className="flex flex-row justify-between mt-2">
              <Text className=" text-lg font-medium mb-5">Job Trends</Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/(root)/search");
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

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 56,
    borderColor: "#D2D9DF",
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginVertical: 17,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
    marginLeft: 12,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: -40,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: "#D2D9DF",
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default Jobs;
