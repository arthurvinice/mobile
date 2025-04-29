import { StyleSheet, Platform, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image } from 'react-native';

export default function InfoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FCE4B5', dark: '#2C1A00' }}
      headerImage={
        <ThemedView style={styles.divLogo}>
          <Image
            source={require('@/assets/images/arthurlanches.jpeg')}
            style={styles.mainLogo}
          />
        </ThemedView>
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Arthur Lanches</ThemedText>

        <ThemedText type="subtitle">📍 Endereço</ThemedText>
        <ThemedText>
          Rua das Goiabeiras, nº 123
          {'\n'}Bairro Centro
          {'\n'}Currais Novos - RN
          {'\n'}CEP: 59380-000
        </ThemedText>

        <ThemedText type="subtitle" style={styles.sectionSpacing}>🕒 Horário de Funcionamento</ThemedText>
        <ThemedText>
          Segunda a Sábado: 08h às 22h
          {'\n'}Domingos e feriados: 14h às 20h
        </ThemedText>

        <ThemedText type="subtitle" style={styles.sectionSpacing}>📞 Contato</ThemedText>
        <ThemedView style={styles.sectionPhone}>
          <ThemedText>Email: </ThemedText>
          <ThemedText style={styles.link} onPress={() => Linking.openURL('https://wa.me/5584999998888')}>
            (84) 4002-8922
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.sectionMail}>
          <ThemedText>Email: </ThemedText>
          <ThemedText
            style={styles.link}
            onPress={() => Linking.openURL('mailto:arthurlanches@email.com')}
          >
            arthurlanches@email.com
          </ThemedText>
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingBottom: 20,
  },
  sectionSpacing: {
    marginTop: 16,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  divLogo: {
    height: 250,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: Platform.select({
      ios: 'rgba(255, 255, 255, 0.5)',
      android: 'rgba(255, 255, 255, 0.5)',
      default: 'rgba(255, 255, 255, 0.5)',
    }),
  },
  mainLogo: {
    height: 350,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  sectionMail: {
    flexDirection: 'row',
    alignItems: 'center', 
    flexWrap: 'wrap' 
  },
  sectionPhone: {
    flexDirection: 'row',
    alignItems: 'center', 
    flexWrap: 'wrap' 
  },
});
