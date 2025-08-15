import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { CourseList, Button, Divider } from "@/components";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { AddCourseButton, CourseView, WelcomeText } from "./components";
import { useTranslation } from "react-i18next";

function generateCourses(count: number) {
  const languages = ["gb", "pl", "fr", "de", "es", "it"];
  const courses = [];

  for (let i = 1; i <= count; i++) {
    const languageFrom =
      languages[Math.floor(Math.random() * languages.length)];
    let languageTo;
    do {
      languageTo = languages[Math.floor(Math.random() * languages.length)];
    } while (languageTo === languageFrom);

    courses.push({
      id: i.toString(),
      name: `Example Course ${i}`,
      description: "This is an example course.",
      languageFrom,
      languageTo,
      updatedAt: new Date().toISOString(),
      count: Math.floor(Math.random() * 15) + 5,
    });
  }

  return courses;
}

export const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  // const [courses, setCourses] = useState([]);

  const courses = generateCourses(15);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        paddingBottom: 0,
        gap: 8,
        margin: 0,
      }}
      edges={["top", "left", "right"]}
    >
      <WelcomeText />
      <Divider color={colors.card} />
      <Text style={{ color: "##342D25", fontSize: 20, fontWeight: "bold" }}>
        {t("homePage.yourCourses")} ({courses.length})
      </Text>
      <ScrollView showsHorizontalScrollIndicator={true}>
        {courses.map((course) => (
          <CourseView key={course.id} {...course} />
        ))}
      </ScrollView>
      <AddCourseButton />
    </SafeAreaView>
  );
};
