import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function SecondScreen() {
  return (
    // Koko ruutu, teksti keskellä
    <View style={styles.container}>
      {/* Toisen näkymän otsikko */}
      <Text variant="headlineMedium" style={styles.text}>sanoi teurastaja lehmälle</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // Täyttää koko ruudun, sisältö keskelle
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: {textAlign: 'center', padding: 20}
})