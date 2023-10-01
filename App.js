import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.30.1.31:80/api/data');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}
