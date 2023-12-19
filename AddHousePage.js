import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddHouse({ navigation }) {
  const [estateId, setEstateId] = useState(''); // 부동산 고유번호
  const [deposit, setDeposit] = useState(''); // 보증금
  const [monthlyRent, setMonthlyRent] = useState(''); // 월세
  const [nickname, setNickname] = useState(''); // 별칭

  const handleSave = () => {
    // 여기에 저장 로직 구현
    // 예: 서버에 데이터 전송, 로컬 상태 업데이트 등

    navigation.goBack(); // LandPage로 돌아가기
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="부동산 고유번호"
        value={estateId}
        onChangeText={setEstateId}
      />
      <TextInput
        style={styles.input}
        placeholder="보증금"
        value={deposit}
        onChangeText={setDeposit}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="월세"
        value={monthlyRent}
        onChangeText={setMonthlyRent}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="별칭"
        value={nickname}
        onChangeText={setNickname}
      />

      <Button title="저장" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});
