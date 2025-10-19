import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomerCard({ customer, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{customer.name}</Text>
      <Text>{customer.email}</Text>
      <Text>{customer.phone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginVertical: 5 },
  name: { fontSize: 18, fontWeight: 'bold' },
});

