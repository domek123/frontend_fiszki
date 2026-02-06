import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { LoginTextInput } from '@/components';
import { useLogin } from '@/hooks';
import GlobalStyles from '@/styles/GlobalStyles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

export const Login = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { login, password, setLogin, setPassword, handleLogin } = useLogin();

  return (
    <SafeAreaView style={[GlobalStyles.SAV, GlobalStyles.center]}>
      <View style={[styles.card, GlobalStyles.center, { backgroundColor: colors.card }]}>
        <Text style={{ color: colors.text, fontSize: 20 }}>{t('loginPage.title')}</Text>

        <LoginTextInput
          value={login}
          onChange={setLogin}
          placeholderText={t('loginPage.loginPlaceholder')}
        />

        <View style={styles.passwordView}>
          <LoginTextInput
            value={password}
            onChange={setPassword}
            placeholderText={t('loginPage.passwordPlaceholder')}
          />

          <TouchableOpacity>
            <Text style={{ color: colors.text, fontSize: 10 }}>
              {t('loginPage.forgotPassword')}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, GlobalStyles.center, { backgroundColor: colors.text }]}
          onPress={() => handleLogin(navigation)}
        >
          <Text style={{ fontSize: 18, color: colors.card }}>{t('loginPage.buttonText')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    padding: 10,
    gap: 16,
    borderRadius: 8,
    shadowColor: '#171717',
    elevation: 15,
  },
  passwordView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  button: {
    height: 40,
    width: '100%',
    borderRadius: 5,
  },
});
