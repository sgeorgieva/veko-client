import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { useTranslation } from "react-i18next";

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    fontFamily: 'Roboto',
    // textAlign: 'right',
  }
});

export default function AppointmentNo({ offerDateTitle, items }){
  const { t } = useTranslation();  

  return (
    <Fragment>
      <View style={styles.container}>
        <View>
          <View>
            <Text>гр. {items.city}</Text>
          </View>
          <View>
            <Text>{items.names}</Text>
          </View>
          <View>
            <Text>{items.email}</Text>
          </View>
          <View>
            <Text>{items.phone}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>{`${t(offerDateTitle)}`}: {items.time} {items.date} </Text>
          </View>
        </View>
      </View>
    </Fragment>
  )
};