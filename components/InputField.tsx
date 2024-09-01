import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const InputField = ({
  label,
  labelAddOn,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  placeholder = "",
  textContentType,
  value,
  onChangeText,
  keyboardType,
  multiline,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-semibold mb-3 pt-3 ${labelStyle}`}>
            {label}{" "}
            {labelAddOn && (
              <Text className="text-neutral-400 text-xs">{labelAddOn}</Text>
            )}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-white px-4 rounded-lg border border-neutral-300 focus:border-primary-500  ${containerStyle}`}
          >
            {icon && icon}
            <TextInput
              className={`rounded-full p-4 font-semibold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              textContentType={textContentType}
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              multiline={multiline}
              textAlignVertical={multiline ? "top" : "center"}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
