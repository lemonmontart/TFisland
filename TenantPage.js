import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Button, StyleSheet } from 'react-native';

export default function TenantPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TFisland</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setIsFilterVisible(true)}
        >
          <Text style={styles.filterButtonText}>필터</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterVisible}
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.filterModal}>
            <Text style={styles.modalText}>필터 설정</Text>
            {/* 필터 옵션 구현 */}
            <Button title="확인" onPress={() => setIsFilterVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    flex: 0.25, // 상단 30%
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#006400',
    borderRadius: 5,
  },
  filterButtonText: {
    color: 'white',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-20%', // 상단 40% 위치 조정
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
  },
  filterModal: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
