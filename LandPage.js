import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function LandPage({ navigation }) {
  const [houses, setHouses] = useState([]); // 등록된 주택 목록 상태
  const userName = "@@"; // 사용자 이름, 로그인 기능 등을 통해 동적으로 설정 가능

  const handleAddHouse = () => {
    navigation.navigate('AddHouse');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TFisland</Text>
      <Text style={styles.subtitle}>{userName}님의 주택 등록 현황</Text>

      {/* 주택 목록 */}
      <FlatList
        data={houses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.houseItem}>
            {/* 주택 정보 표시 */}
            <Text>{item.name}</Text>
            {/* 여기에 추가적인 주택 정보 표시 */}
          </View>
        )}
      />

      {/* 주택 추가 버튼 */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddHouse}>
        <Text style={styles.addButtonText}>주택 추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },
  houseItem: {
    // 주택 목록 아이템 스타일
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    backgroundColor: '#006400',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
  },
});
