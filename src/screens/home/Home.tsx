import {Text, ScrollView, ActivityIndicator, StyleSheet, View} from "react-native";
import { Divider } from "@/components";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import React, { useCallback } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { AddCourseButton, CourseView, Header } from "./components";
import { useTranslation } from "react-i18next";
import { useSets } from "./hooks";

export const Home = ({ navigation }) => {
  const { sets, isLoading, refetch } = useSets();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  return (
          <SafeAreaView style={{flex:1}}>
              <Header/>
              <View style={styles.container}>
                  {isLoading && <ActivityIndicator />}
                  {!isLoading && (
                      <ScrollView showsHorizontalScrollIndicator={true}>
                          {sets.map((course) => (
                              <CourseView key={course.id} {...course} />
                          ))}
                      </ScrollView>
                  )}
              </View>
              <AddCourseButton />
          </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
    gap: 8,
  },
  courseCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
