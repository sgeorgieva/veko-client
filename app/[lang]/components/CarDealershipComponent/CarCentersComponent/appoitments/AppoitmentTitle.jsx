import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const styles = StyleSheet.create({
  titleContainer: {
    fontFamily: 'Roboto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -145,
  },
  offerTitle: {
    fontFamily: 'Roboto',
    letterSpacing: 4,
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 13,
    textAlign: 'center'
  }
});

const AppointmentTitle = ({ title, offerTitle }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.offerTitle}>{`${t(offerTitle)}`}</Text>
      <Text style={styles.title}>{`${t(title)}`}</Text>
    </View>
  )
};

export default AppointmentTitle;