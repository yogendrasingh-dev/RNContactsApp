import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default styles = StyleSheet.create({
  title: {
    fontSize: 21,
    textAlign: 'center',
    padding: 20,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    padding: 20,
    fontWeight: '500',
  },
  bottomSection: {
    flexDirection: 'row',
    padding: 20,
  },
  infoText: {
    fontSize: 17,
  },
  linkButton: {
    paddingLeft: 16,
    color: colors.primary,
    fontSize: 16,
  },
});
