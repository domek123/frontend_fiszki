import { ActivityIndicator, StyleSheet, View, FlatList, Text, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AddCourseButton, CourseView, Header } from './components';
import { useSets } from '@/api';
import { useTheme } from '@/context';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  const { data, isLoading, refetch, isError } = useSets();
  const { theme } = useTheme();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <Header />

      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : isError ? (
          <Text style={{ color: theme.colors.notification }}>{t('homePage.error')}</Text>
        ) : (
          <FlatList
            data={data || []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CourseView {...item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
            ListEmptyComponent={
              <Text style={[styles.emptyText, { color: theme.colors.text }]}>
                {t('homePage.noCourses')}
              </Text>
            }
          />
        )}
      </View>

      <AddCourseButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  listContent: {
    paddingBottom: 100,
    gap: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    opacity: 0.6,
  },
});
