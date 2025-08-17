import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialIcons";
import { languageCodes } from "./constants"; // Assuming you have a constants file with language codes
export const LanguageSelect = () => {
  const { t } = useTranslation();

  const data = languageCodes.map((code) => ({
    id: code,
    name: t(`languages.${code}`),
  }));

  return (
    <SelectDropdown
      data={data}
      onSelect={(item, index) => {
        console.log(item, index);
      }}
      renderButton={(selectedItem, _) => {
        return (
          <View style={styles.dropdown}>
            {selectedItem ? (
              <Text>{selectedItem.name}</Text>
            ) : (
              <Text>{t("createSet.selectLanguage")}</Text>
            )}
          </View>
        );
      }}
      renderItem={(item, _) => {
        return (
          <View style={styles.dropdownItemStyle}>
            <Text>{item.name}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
      search
      searchInputStyle={styles.searchInputStyle}
      renderSearchInputLeftIcon={() => <Icon name="search" size={20} />}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 10,
  },
  dropdownItemStyle: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    height: 45,
  },
  dropdownMenuStyle: {
    marginTop: -35,
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 200,
  },
  searchInputStyle: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
  },
});
