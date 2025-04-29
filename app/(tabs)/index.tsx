import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
      <ThemedView style={styles.divLogo}>
        <Image
          source={require('@/assets/images/arthurlanches.jpeg')}
          style={styles.mainLogo}
        />
      </ThemedView>
        
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem-vindo a Arthur Lanches!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Salada Pequena - 100ml</ThemedText>
        <ThemedText>
          Frutas: 
          <ThemedText type="defaultSemiBold">
            {'\n'}- Abacaxi
            {'\n'}- Maçã
            {'\n'}- Banana
            {'\n'}- Uva
            {'\n'}- Morango
            {'\n'}- VALOR: <ThemedText type='defaultSemiBold'>R$5,00</ThemedText> 
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Vitamina 300ml</ThemedText>
        <ThemedText>
          Frutas: 
          <ThemedText type="defaultSemiBold">
            {'\n'}- Abacaxi
            {'\n'}- Maçã
            {'\n'}- Banana
            {'\n'}- Uva
            {'\n'}- Morango
            {'\n'}- VALOR: <ThemedText type='defaultSemiBold'>R$10,00</ThemedText> 
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sanduíche Natural</ThemedText>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  divLogo:{
    height: 178,
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
