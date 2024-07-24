import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('login');

  const renderLogin = () => (
    <View>
      <Text>Username</Text>
      <TextInput style={styles.input} />
      <Text>Password</Text>
      <TextInput style={styles.input} secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Profile')} />
      <Button title="Back" onPress={() => navigation.navigate('Help')} />
    </View>
  );

  const renderSignUp = () => (
    <View>
      <Text>Photo</Text>
      <TextInput style={styles.input} />
      <Text>Name</Text>
      <TextInput style={styles.input} />
      <Text>Email</Text>
      <TextInput style={styles.input} />
      <Text>Password</Text>
      <TextInput style={styles.input} secureTextEntry />
      <Button title="Sign Up" onPress={() => navigation.navigate('Profile')} />
      <Button title="Back" onPress={() => navigation.navigate('Help')} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'login' && styles.activeTab]}
          onPress={() => setActiveTab('login')}
        >
          <Text style={styles.tabText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'signup' && styles.activeTab]}
          onPress={() => setActiveTab('signup')}
        >
          <Text style={styles.tabText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'login' ? renderLogin() : renderSignUp()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});