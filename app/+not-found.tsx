import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Que DEMAIS!!!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.titulo1}>Essa tela não existe</ThemedText>
        <ThemedText type="title" style={styles.titulo2}>VOLTE IMEDIATAMENTE</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" style={styles.nome2}>voltar para o inicio!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'green',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: 'white',
    textDecorationLine: 'underline',
  },
  titulo1: {
    fontSize: 150,
    fontWeight: 'bold',
    color: 'red',
    paddingBottom: 30,
  },
  titulo2: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  nome2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
