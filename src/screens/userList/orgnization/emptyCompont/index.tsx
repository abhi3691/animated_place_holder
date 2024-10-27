import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const EmptyCompont = () => {
  return (
    <View>
      <Text style={styles.emptyText}>No list found</Text>
    </View>
  );
};

export default EmptyCompont;
