import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function HomeScreen() {
  return (
    // Koko ruutu, teksti keskellä
    <View style={styles.container}>
      {/* Paperin Text-komponentti, valmis isompi otsikkotyyli */}
      <Text variant="headlineMedium" style={styles.text}>Ei tässä muu auta</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // Täyttää koko ruudun, sisältö keskelle pysty- ja vaakasuunnassa
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  // Tekstin rivit keskelle, ja reunoille tilaa
  text: {textAlign: 'center', padding: 20}
})