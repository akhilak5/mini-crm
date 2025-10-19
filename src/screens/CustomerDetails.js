import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function CustomerDetails({ route, navigation }) {
  const { customerId } = route.params;
  const customer = useSelector(state => state.customers.customers.find(c => c.id === customerId));

  if (!customer) return <Text>Customer not found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{customer.name}</Text>
      <Text>Email: {customer.email}</Text>
      <Text>Phone: {customer.phone}</Text>
      <Button title="View Leads" onPress={() => navigation.navigate('LeadList', { customerId })} />
      <Button title="Add Lead" onPress={() => navigation.navigate('AddLead', { customerId })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});



