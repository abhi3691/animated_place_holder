import React, {FC, Fragment} from 'react';
import Buttons from 'react-native-custom-buttons';
import styles from './styles';
import {ActivityIndicator, View} from 'react-native';

interface props {
  onPress: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}
const Footer: FC<props> = ({onPress, isFetchingNextPage, hasNextPage}) => {
  console.log('hasNextPage', hasNextPage);
  return (
    <View>
      {hasNextPage && (
        <Fragment>{isFetchingNextPage ? <ActivityIndicator /> : null}</Fragment>
      )}
      <View style={styles.footer} />
    </View>
  );
};

export default Footer;
