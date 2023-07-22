import {View, Text} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';

import LoginInput from './components/loginInput';
import NextButton from './components/nextButton';

const EmailPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
        paddingHorizontal: SIZE.container,
        paddingTop: 20,
      }}>
      <LoginInput
        title={'What’s your email?'}
        desc={'You’ll need to confirm this email later.'}
      />
      <NextButton
        onPress={() => {
          navigation.navigate('PassPage');
        }}
      />
    </View>
  );
};

export default EmailPage;
