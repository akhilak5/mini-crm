import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeadCard({ lead }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{lead.title}</Text>
      <Text>{lead.description}</Text>
      <Text>Status: {lead.status}</Text>
      <Text>Value: {lead.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginVertical: 5 },
  title: { fontSize: 18, fontWeight: 'bold' },
});

