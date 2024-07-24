import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function StoryDetailScreen({ route }) {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.story }} style={styles.storyImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.storyText}>Here is the story content...</Text>
      {/* Add more details about the story here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  storyImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyText: {
    fontSize: 18,
    textAlign: 'center',
  },
});