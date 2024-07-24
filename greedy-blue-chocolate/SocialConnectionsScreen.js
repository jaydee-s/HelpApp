import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const connections = [
  { id: '1', name: 'Alice', distance: '2 miles', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '2', name: 'Bob', distance: '3 miles', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '3', name: 'Charlie', distance: '1 mile', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'Daisy', distance: '2 miles', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: '5', name: 'Eve', distance: '3 miles', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: '6', name: 'Frank', distance: '1 mile', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
  { id: '7', name: 'Grace', distance: '2 miles', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
  { id: '8', name: 'Hank', distance: '3 miles', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
  { id: '9', name: 'Ivy', distance: '1 mile', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
  { id: '10', name: 'Jack', distance: '2 miles', image: 'https://randomuser.me/api/portraits/men/10.jpg' }
];

const SocialConnectionsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('Help')}>
        <Text style={styles.buttonText}>HELP</Text>
      </TouchableOpacity>
      <View style={styles.profilesContainer}>
        {connections.map((connection) => (
          <TouchableOpacity
            key={connection.id}
            style={styles.profile}
            onPress={() => navigation.navigate('Profile', { user: connection })}
          >
            <Image source={{ uri: connection.image }} style={styles.profileImage} />
            <Text style={styles.profileName}>{connection.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  helpButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 20,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
  },
  profile: {
    alignItems: 'center',
    margin: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  profileName: {
    textAlign: 'center',
    fontSize: 12,
    width: 60,
  },
});

export default SocialConnectionsScreen;