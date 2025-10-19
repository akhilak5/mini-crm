import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import LeadCard from '../components/LeadCard';

export default function LeadList({ route }) {
  const { customerId } = route.params;
  const leads = useSelector(state => state.leads.leads.filter(l => l.customerId === customerId));

  return (
    <View style={styles.container}>
      {leads.length === 0 ? <Text>No leads</Text> :
        <FlatList
          data={leads}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <LeadCard lead={item} />}
        />}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } });

