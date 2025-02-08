import React, { useState, useCallback } from 'react';
import { View, StatusBar, ScrollView, RefreshControl, Text, StyleSheet } from 'react-native';

export default function bt2() {
  const [refreshing, setRefreshing] = useState(false);
  const [screenColor, setScreenColor] = useState('#00BFFF'); // Màu màn hình ban đầu

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setScreenColor(prev => (prev === '#00BFFF' ? '#FF69B4' : '#00BFFF')); // Đổi màu màn hình
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: screenColor }]}>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Text style={styles.text}>Kéo xuống để thay đổi màu màn hình</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 500,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
