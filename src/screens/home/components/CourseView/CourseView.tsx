import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CourseViewType } from './CourseView.types';
import { useTheme } from '@/context';
import { RootStackParamList } from '@/navigation';

export const CourseView = (props: CourseViewType) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          borderWidth: 1,
        },
      ]}
      onPress={() =>
        navigation.navigate('SetDetails', {
          setId: props.id,
        })
      }
    >
      <SvgUri
        uri={`https://hatscripts.github.io/circle-flags/flags/${props.languageFrom}.svg`}
        width="35"
        height="35"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {props.name} ({props.count})
        </Text>
        {props.description ? (
          <Text style={[styles.description, { color: theme.colors.text, opacity: 0.7 }]}>
            {props.description}
          </Text>
        ) : null}
      </View>

      <Icon
        name="chevron-right"
        size={30}
        style={{
          position: 'absolute',
          right: 10,
          color: theme.colors.border, // Używamy koloru border dla ikony, by była subtelna
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    position: 'relative',
  },
  textContainer: {
    flex: 1,
    marginRight: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    marginTop: 2,
  },
});
