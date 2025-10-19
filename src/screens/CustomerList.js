import React from 'react';
import { View, FlatList, Button, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import CustomerCard from '../components/CustomerCard';

export default function CustomerList({ navigation }) {
  const customers = useSelector(state => state.customers.customers);

  return (
    <View style={styles.container}>
      <Button title="Add Customer" onPress={() => navigation.navigate('AddCustomer')} />
      {customers.length === 0 ? <Text>No customers</Text> : (
        <FlatList
          data={customers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CustomerCard customer={item} onPress={() => navigation.navigate('CustomerDetails', { customerId: item.id })} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } });



