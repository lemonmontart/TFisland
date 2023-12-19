import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handlePress = (button) => {
    setSelectedButton(button);
    navigation.navigate(button === 'tenant' ? 'Tenant' : 'Land');
  };

  const getButtonColor = (button) => {
    return selectedButton === button ? '#006400' : '#A9A9A9'; // 진초록 또는 무채색
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TFisland</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: getButtonColor('tenant') }]}
          onPress={() => handlePress('tenant')}
        >
          <Text style={styles.buttonText}>임차인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: getButtonColor('land') }]}
          onPress={() => handlePress('land')}
        >
          <Text style={styles.buttonText}>임대인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
