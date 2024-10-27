import {View} from 'react-native';
import React, {useState} from 'react';
import PlaceholderAnimation from '../../components/AnimatedInput';
import styles from './styles';

const HomeScreen = () => {
  const [value, setValue] = useState('');
  const suggestions = [
    'Search...',
    'Find recipes...',
    'Discover new dishes...',
    'Enter keywords...',
  ];
  return (
    <View style={styles.container}>
      <PlaceholderAnimation
        value={value}
        onChangeText={e => setValue(e)}
        suggestions={suggestions}
        style={styles.input}
      />
    </View>
  );
};

export default HomeScreen;
