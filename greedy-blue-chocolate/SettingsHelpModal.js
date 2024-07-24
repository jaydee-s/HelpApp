import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function SettingsHelpModal({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.settingsText}>⚙️</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => { setModalVisible(false); navigation.navigate('Profile'); }}>
              <Text style={styles.modalOptionText}>User Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => alert('Wallet Pressed')}>
              <Text style={styles.modalOptionText}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={() => alert('Contact Us Pressed')}>
              <Text style={styles.modalOptionText}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.helpButton} 
              onPress={() => { setModalVisible(false); navigation.navigate('Help'); }}
            >
              <Text style={styles.helpButtonText}>HELP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    flexDirection: 'row',
  },
  settingsButton: {
    marginRight: 20,
  },
  settingsText: {
    fontSize: 24,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
  },
  modalCloseText: {
    fontSize: 18,
  },
  modalOption: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 18,
  },
  helpButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // For 3D effect
    marginTop: 20,
  },
  helpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});