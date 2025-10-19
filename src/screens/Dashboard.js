import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mini CRM</Text>
      <Button title="View Customers" onPress={() => navigation.navigate('CustomerList')} />
      <View style={{ marginTop: 10 }}>
        <Button title="Logout" color="red" onPress={() => dispatch(logout())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});

