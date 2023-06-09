import React, { useEffect, useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Obter imagem de gato" onPress={fetchCatImage} />
      {catImage && <Image source={{ uri: catImage }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
