import React from 'react';
import { Text, View, StyleSheet, Font, Image, Svg, Line } from '@react-pdf/renderer';
import { useTranslation } from "react-i18next";
// import Roboto from '../../fonts/roboto/Roboto-Regular.ttf';
// import Roboto from '../../../../../fonts/roboto/Ropboto-Regular.ttf';
import Logo from '../../../../../../public/images/Logo_Veko.png';

// Font.register({ family: 'Roboto', fonts: [{ src: Roboto, fontWeight: 'bold' }] });
Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    fontFamily: 'Roboto',
    justifyContent: 'space-between',
    fontSize: 12
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  },
  logo: {
    width: '20%'
  }
});

export default function AppointmentTo() {
  const { t } = useTranslation();

  return (
    <View>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} src={Logo} />
        <View style={styles.header}>
          <Text>VEKO Oil</Text>
          <Text>бул. "Христо Ботев" 12, 7001 Русе</Text>
          <Text>tel: +359 66 861 616</Text>
          <Text>email: veko@veko-oil.eu</Text>
        </View>
      </View>
      <View>
        <Svg height="200" width="800">
          <Line
            x1="0"
            y1="15"
            x2="480"
            y2="15"
            strokeWidth={0.5}
            stroke="rgb(0,0,0)"
          />
        </Svg>
      </View>
    </View>
  )
};