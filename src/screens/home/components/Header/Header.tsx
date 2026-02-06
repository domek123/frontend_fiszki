import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context';

export const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <View style={[styles.headerView, { backgroundColor: theme.colors.primary }]}>
      <Text style={styles.headerText}>{t('homePage.yourCourses')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    padding: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
