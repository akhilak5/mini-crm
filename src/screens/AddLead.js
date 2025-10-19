import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addLead } from '../redux/leadSlice';
import { v4 as uuidv4 } from 'uuid';

export default function AddLead({ route, navigation }) {
  const { customerId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('New');
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title) return Alert.alert('Error', 'Title is required');
    dispatch(addLead({ id: uuidv4(), customerId, title, description, status, value }));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Status (New, Contacted, Converted, Lost)" value={status} onChangeText={setStatus} style={styles.input} />
      <TextInput placeholder="Value" value={value} onChangeText={setValue} style={styles.input} />
      <Button title="Add Lead" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 6 },
});

