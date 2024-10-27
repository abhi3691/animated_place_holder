import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

interface Props extends TextInputProps {
  suggestions: string[];
  inputContainerStyle?: ViewStyle;
}

const PlaceholderAnimation: FC<Props> = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateY = useSharedValue(0);

  const setIndexFunc = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % props.suggestions.length);
  }, [props.suggestions.length]);
  useEffect(() => {
    if (props.value) {
      return;
    } // Stop animation when there's input

    // Loop to animate the text placeholder position every second

    const interval = setInterval(() => {
      // Trigger the animation
      translateY.value = withTiming(-15, {duration: 1000}, () => {
        // Reset translateY after reaching the top
        translateY.value = withTiming(0, {duration: 0});
        runOnJS(setIndexFunc)();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, translateY, setIndexFunc, props.value]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    opacity: withTiming(translateY.value === 0 ? 1 : 0, {duration: 750}), // Hide placeholder when input has value
  }));

  return (
    <View style={styles.container}>
      <View style={props?.inputContainerStyle ?? styles.inputContainer}>
        {!props.value && (
          <Animated.Text
            style={[
              styles.placeholder,
              animatedStyle,
              props.placeholderTextColor && {color: props.placeholderTextColor},
            ]}>
            {props.suggestions[currentIndex]}
          </Animated.Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="" // Placeholder is managed by Animated.Text
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    fontSize: 20,
  },
  placeholder: {
    position: 'absolute',
    left: 24,
    top: 12,
    fontSize: 16,
    color: '#999',
    // zIndex: -1,
  },
});

export default PlaceholderAnimation;
