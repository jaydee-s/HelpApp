import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HelpScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const sampleUser = {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>HELP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="settings-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.messageButton}
        onPress={() => navigation.navigate('HelpMessages')}
      >
        <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.swipeButton}
        onPress={() => navigation.navigate('SocialConnections')}
      >
        <Text style={styles.swipeButtonText}>Swipe to See Connections</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Profile', { user: sampleUser });
            }}
          >
            <Ionicons name="person-circle-outline" size={50} color="black" />
            <Text>User Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setModalVisible(false);
              // Navigation logic for Wallet
            }}
          >
            <Ionicons name="wallet-outline" size={50} color="black" />
            <Text>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setModalVisible(false);
              // Navigation logic for Contact Us
            }}
          >
            <Ionicons name="mail-outline" size={50} color="black" />
            <Text>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  helpButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  messageButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  swipeButton: {
    position: 'absolute',
    top: 50,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  swipeButtonText: {
    fontSize: 16,
    color: '#757575',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  iconButton: {
    alignItems: 'center',
    margin: 20,
  },
});