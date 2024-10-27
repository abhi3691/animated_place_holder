import {StatusBar, StyleSheet} from 'react-native';
import ScreenRatio from '../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    marginTop: StatusBar.currentHeight,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    height: 100,
  },
});
export default styles;
