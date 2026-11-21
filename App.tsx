import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PaperProvider } from 'react-native-paper'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/HomeScreen'
import SecondScreen from './screens/SecondScreen'
import NavigationBar from './components/NavigationBar'
import { RootStackParamList } from './types'

// Pinonavigointi: uusi näkymä menee vanhan päälle kuin kortti pakkaan
const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    // Antaa Paperin tyylit koko sovellukselle ja kertoo, mistä kuvakkeet haetaan
    <PaperProvider settings={{ icon: (props) => <MaterialCommunityIcons {...props} /> }}>
      {/* Pitää kirjaa, missä näkymässä ollaan */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Eka sivu" // sovellus aukeaa Eka sivu -näkymään
          screenOptions={{ header: (props) => <NavigationBar {...props} /> }} // oma yläpalkki kaikille näkymille
        >
          {/* Näkymät: name = nimi jolla navigoidaan, component = näytettävä ruutu */}
          <Stack.Screen name="Eka sivu" component={HomeScreen} />
          <Stack.Screen name="Toka sivu" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}