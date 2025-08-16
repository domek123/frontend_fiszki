import { Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Divider } from "@/components";
import { useTheme } from "@react-navigation/native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { AddCourseButton, CourseView, WelcomeText } from "./components";
import { useTranslation } from "react-i18next";
import { useSets } from "./hooks";

export const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  // const { sets, isLoading } = useSets();
  const sets = [
    {
      id: "1",
      name: "Course 1",
      languageFrom: "gb",
      languageTo: "fr",
      createdAt: "12.02.20",
      updatedAt: "12.02.20",
      count: 10,
    },
  ];
  const isLoading = false;
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <WelcomeText />
      <Divider color={colors.card} />
      <Text style={styles.courseCount}>
        {t("homePage.yourCourses")} ({sets.length})
      </Text>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <ScrollView showsHorizontalScrollIndicator={true}>
          {sets.map((course) => (
            <CourseView key={course.id} {...course} />
          ))}
        </ScrollView>
      )}
      <AddCourseButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    gap: 8,
  },
  courseCount: {
    color: "#342D25",
    fontSize: 20,
    fontWeight: "bold",
  },
});
