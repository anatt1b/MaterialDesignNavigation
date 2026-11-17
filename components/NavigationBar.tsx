import { Appbar } from 'react-native-paper'
import { StackHeaderProps } from '@react-navigation/stack'

// Oma yläpalkki. Navigointi antaa propsit automaattisesti:
// navigation = liikkuminen näkymien välillä
// back = onko taaksepäin mentävää (tyhjä Eka sivulla)
// route = nykyisen näkymän tiedot, esim. nimi
// options = näkymän asetukset, esim. otsikko
export default function NavigationBar({ navigation, back, route, options }: StackHeaderProps) {
  // Otsikko: käytetään asetettua otsikkoa, muuten näkymän nimeä
  const title = options.title ?? route.name

  return (
    // marginTop siirtää palkkia alemmas, ettei Expon nappi ole edessä
    <Appbar.Header style={{ marginTop: 100 }}>
      {/* Palkin otsikkoteksti */}
      <Appbar.Content title={title} />

      {/* Oikea nuoli: Eka sivulla vie eteenpäin, Toka sivulla palauttaa */}
      <Appbar.Action
        icon={back ? 'arrow-left' : 'arrow-right'} // Toka sivulla vasemmalle, Eka sivulla oikealle
        onPress={() => (back ? navigation.goBack() : navigation.navigate('Toka sivu'))} // palaa tai siirry eteenpäin
      />
    </Appbar.Header>
  )
}