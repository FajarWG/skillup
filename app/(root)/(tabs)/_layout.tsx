import { Tabs } from "expo-router";
import {
  Activity,
  ArchiveMinus,
  Briefcase,
  Home,
  Message,
  User,
} from "iconsax-react-native";
import { Image, ImageSourcePropType, Text, View } from "react-native";

const TabIcon = ({
  Icon,
  focused,
  name,
}: {
  Icon: any;
  focused: boolean;
  name: string;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${
      focused ? "bg-general-300" : ""
    }`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${
        focused ? "bg-general-400" : ""
      }`}
    >
      {Icon}
      <Text
        className={`text-xs text-center  ${
          focused
            ? "text-primary-500 font-bold"
            : "text-neutral-400 font-medium"
        }`}
      >
        {name}
      </Text>
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",

          paddingBottom: 0, // ios only
          overflow: "hidden",

          height: 78,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={
                <Home
                  size="24"
                  color={focused ? "#3366FF" : "#9CA3AF"}
                  variant={focused ? "Bold" : "Outline"}
                />
              }
              focused={focused}
              name="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={
                <Activity
                  size="24"
                  color={focused ? "#3366FF" : "#9CA3AF"}
                  variant={focused ? "Bold" : "Outline"}
                />
              }
              focused={focused}
              name="Skills"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={
                <Briefcase
                  variant={focused ? "Bold" : "Outline"}
                  size="24"
                  color={focused ? "#3366FF" : "#9CA3AF"}
                />
              }
              focused={focused}
              name="Jobs"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="checking"
        options={{
          title: "Checking",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={
                <ArchiveMinus
                  size="24"
                  color={focused ? "#3366FF" : "#9CA3AF"}
                  variant={focused ? "Bold" : "Outline"}
                />
              }
              focused={focused}
              name="Checking"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              Icon={
                <User
                  size="24"
                  color={focused ? "#3366FF" : "#9CA3AF"}
                  variant={focused ? "Bold" : "Outline"}
                />
              }
              focused={focused}
              name="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
