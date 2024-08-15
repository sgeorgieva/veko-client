import React from 'react';
import { Text, View, Font, StyleSheet } from '@react-pdf/renderer';
// import { useTranslation } from "react-i18next";

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 13,
    textAlign: 'left',
    marginTop: 25,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 10
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderLeftWidth: 0,
    '&:last-child': {
      borderLeftWidth: 0,
    }
  },
  tableCol: {
    fontFamily: 'Roboto',
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    '&:last-child': {
      borderLeftWidth: 0,
    }
  },
  tableCol2: {
    fontFamily: 'Roboto',
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol3: {
    fontFamily: 'Roboto',
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol3: {
    fontFamily: 'Roboto',
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCell: {
    fontFamily: 'Roboto',
    margin: "auto",
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold'
  },
  rowTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    fontSize: 12,
    fontStyle: 'bold',
    borderLeftWidth: 0,
    marginTop: 20
  },
  descriptionTotal: {
    width: '80%',
    textAlign: 'right',
    paddingRight: 8,
    fontStyle: 'bold',
    borderLeftWidth: 0,
  },
  footerText: {
    fontFamily: 'Roboto',
    marginTop: 15,
    fontSize: 12,
    fontWeight: 'bold'
  }
});

const AppointmentTable = ({ items }) => {
  // const { t } = useTranslation();
  
  return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Модел</Text>
          </View>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>Тип двигател</Text>
          </View> 
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>Година</Text>
          </View>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>VIN номер</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{items.model}</Text>
          </View>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>{items.engine}</Text>
          </View>
          <View style={styles.tableCol3}>
            <Text style={styles.tableCell}>{items.year}</Text>
          </View>
          <View style={styles.tableCol3}>
            <Text style={styles.tableCell}>{items.vinNumber}</Text>
          </View>
        </View>
        <Text style={styles.footerText}>
          &nbsp;&nbsp;Съобщение от клиент: {items.message}
        </Text>
      </View>
  )
};

export default AppointmentTable;