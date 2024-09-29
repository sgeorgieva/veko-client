import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import AppointmentTo from "./AppoitmentTo";
import AppointmentTitle from "./AppoitmentTitle";
import AppointmentNo from "./AppointmentNo";
import AppointmentTable from "./AppointmentTable";
import AppointmentThankYouMsg from "./AppointmentThankYouMsg";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: "15%",
    marginLeft: "auto",
  },
});

// Create Document Component
export default function MyDocument({ items }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <AppointmentTo />
        <AppointmentTitle
          title="Информация на часа за преглед"
          offerTitle="Автоцентрове ВЕКО Ойл"
        />
        <AppointmentNo items={items[0]} offerDateTitle="час за преглед" />
        <AppointmentTable items={items[0]} />
        <AppointmentThankYouMsg message="Благодарим Ви за доверието" />
      </Page>
    </Document>
  );
}
