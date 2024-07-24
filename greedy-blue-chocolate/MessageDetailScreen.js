import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MessageDetailScreen({ route, navigation }) {
  const { user } = route.params;
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleSendMessage = () => {
    // Handle sending the message here
    setMessage('');
  };

  const handleSendMoney = () => {
    // Handle sending money here
    alert(`Sent $${amount} to ${user.name}`);
    setModalVisible(false);
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
          <Image source={{ uri: user.image }} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>How can I help?</Text>
        <Text style={styles.messageText}>Oh, I want advice to help.</Text>
        <Text style={styles.messageTextRight}>Sure, give me some more details.</Text>
        <Text style={styles.messageTextRight}>Thanks.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Ionicons name="send-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="cash-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Send Money</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="$0.00"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <Button title="Send" onPress={handleSendMoney} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontSize: 20,
    marginLeft: 10,
  },
  messageContainer: {
    flex: 1,
  },
  messageText: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  messageTextRight: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
  modalInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});