import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default styles = StyleSheet.create({
  wrapper: {
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
