import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onBoarding } from "@/constants";
import Buttons from "@/components/Buttons";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [active, setActive] = useState(0);
  const isLastSlide = active === onBoarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center bg-white px-6">
      <View className="flex flex-row items-center justify-center w-full px-6">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-[61px] h-[19px]"
        />
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
          className="w-full flex items-end p-5"
        >
          <Text className="text-gray-500 text-base text-normal">Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[8px] h-[8px] bg-primary-200 rounded-full mx-1"></View>
        }
        activeDot={
          <View className="w-[8px] h-[8px] bg-primary-500 rounded-full mx-1"></View>
        }
        onIndexChanged={(index) => setActive(index)}
      >
        {onBoarding.map((item, index) => (
          <View
            key={index}
            className="flex flex-col gap-6 items-center justify-start"
          >
            <Image source={item.image} className="w-[375px] h-[424px]" />
            <View className="flex gap-3">
              <Text className="text-4xl font-bold">{item.title}</Text>
              <Text className="text-base text-gray-500">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <Buttons
        title="Next"
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className=" mb-6"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
