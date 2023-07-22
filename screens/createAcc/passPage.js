import {View, Text} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';

import LoginInput from './components/loginInput';
import NextButton from './components/nextButton';

const PassPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
        paddingHorizontal: SIZE.container,
        paddingTop: 20,
      }}>
      <LoginInput
        title={'Create a password'}
        desc={'Use atleast 8 characters.'}
      />
      <NextButton onPress={() => {
        navigation.navigate("GenderPage")
      }} />
    </View>
  );
};

export default PassPage;
