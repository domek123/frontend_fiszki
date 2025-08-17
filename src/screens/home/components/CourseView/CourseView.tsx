import { View, Text, StyleSheet, Image } from "react-native";
import { CourseViewType } from "./CourseView.types";
import React from "react";
import { SvgUri } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialIcons";
export const CourseView = (props: CourseViewType) => {
  return (
    <View style={styles.container}>
      <SvgUri
        uri={`https://hatscripts.github.io/circle-flags/flags/${props.languageFrom}.svg`}
        width="35"
        height="35"
      />
      <View>
        <Text style={styles.title}>
          {props.name} ({props.count})
        </Text>
        {props.description ? (
          <Text style={styles.description}>{props.description}</Text>
        ) : null}
      </View>
      <Icon
        name="chevron-right"
        size={35}
        style={{
          position: "absolute",
          right: 10,
          color: "rgb(242, 242, 242)",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
