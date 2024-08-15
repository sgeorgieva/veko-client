import React from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { useTranslation } from "react-i18next";

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginTop: 25
  },
  reportTitle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

const AppointmentThankYouMsg = ({ message }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>{`${t(message)}`}</Text>
    </View>
  )
};

export default AppointmentThankYouMsg;