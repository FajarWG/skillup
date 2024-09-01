import { router } from "expo-router";
import { DocumentCloud } from "iconsax-react-native";
import { Image, Text, View } from "react-native";

const CVHistoryCard = ({
  title,
  date,
  score,
}: {
  title: string;
  date: string;
  score: number;
}) => {
  return (
    <View className="w-full">
      <View className="flex flex-row items-center">
        <View className="p-3">
          <DocumentCloud size="28" color="#3366FF" variant="Bold" />
        </View>
        <View className="ml-3">
          <Text className="text-neutral-900 font-semibold text-lg">
            {title}
          </Text>
          <Text className="text-neutral-700 text-sm">{date}</Text>
        </View>
        <View className="ml-auto">
          <Text className="text-neutral-400 font-medium text-sm">
            Score Result
          </Text>
          <Text className="text-primary-500 text-xl font-semibold text-center">
            {score}
            <Text className="text-xs leading-6">/100</Text>
          </Text>
        </View>
      </View>

      <View className="w-full h-[1.5px] bg-neutral-200 mt-2" />
    </View>
  );
};

export default CVHistoryCard;
