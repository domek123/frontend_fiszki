import { HeaderText } from "@/components";
import { Trans, useTranslation } from "react-i18next";
import { View, Text } from "react-native";

export const WelcomeText = () => {
  const { t } = useTranslation();

  return (
    <View>
      <HeaderText text={`${t("homePage.welcome")}, Dominik 🖐️`} />

      <Text style={{ color: "#342D25", fontSize: 20 }}>
        <Trans
          i18nKey="homePage.flashcardsLeft"
          values={{ count: 5 }}
          components={{
            bold: <Text style={{ fontWeight: "bold" }} />,
          }}
        />
      </Text>
    </View>
  );
};
