import { TickCircle } from "iconsax-react-native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ text, mode }: any) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View>

        <TickCircle size="24" color="#3366FF" /> */}

        {mode === "done" ? (
          <TickCircle size="24" color="#3366FF" />
        ) : (
          <View style={styles.square}></View>
        )}

        <Text style={styles.itemText}>{text}</Text>
      </View>
      {mode === "done" ? null : <View style={styles.circular}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    marginHorizontal: 5,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#3366FF",
    opacity: 0.4,
    borderRadius: 5,
  },
  itemText: {
    marginLeft: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#3366FF",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
