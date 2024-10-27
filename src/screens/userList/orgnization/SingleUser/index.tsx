import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface props {
  item: any;
  index: number;
}
const SingleUser: FC<props> = ({item, index}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const goToScreen = () => {
    navigation.navigate('UserProfile', {
      thumbnail: item?.avatar,
      index: index,
    });
  };
  return (
    <Pressable style={styles.Container} onPress={() => goToScreen()}>
      <View style={styles.rowWrapper}>
        <Animated.Image source={{uri: item?.avatar}} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>
            {item?.first_name + ' ' + item?.lastName}
          </Text>
          <Text style={styles.email}>{item?.email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SingleUser;
