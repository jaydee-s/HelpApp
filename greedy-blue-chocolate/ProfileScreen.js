import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.profileImage} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.credibility}>Credibility: {user.credibility}</Text>
      <Text style={styles.username}>@{user.username}</Text>
      <View style={styles.helpContainer}>
        <Text style={styles.helpText}>Help Provided: {user.helpProvided}</Text>
        <Text style={styles.helpText}>Help Received: {user.helpReceived}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  credibility: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  helpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  helpText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;