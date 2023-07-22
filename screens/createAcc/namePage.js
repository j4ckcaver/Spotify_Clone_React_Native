import {View, Text, TouchableOpacity} from 'react-native';

import {COLOR, SIZE} from '../../content/Style';

import LoginInput from './components/loginInput';
import CheckBoxInput from './components/checkBoxInput';

const NamePage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
        paddingHorizontal: SIZE.container,
        paddingTop: 20,
      }}>
      <LoginInput
        title={"What's your name?"}
        desc={'This appears on your spotify profile'}
      />

      <View
        style={{
          height: 1,
          backgroundColor: COLOR.lightGray,
          marginVertical: 30,
        }}
      />

      <View>
        <Text
          style={{
            color: COLOR.white,
            fontWeight: 'bold',
            fontSize: 10,
          }}>
          By tapping on “Create account”, you agree to the spotify Terms of Use.
        </Text>
        <Text
          style={{
            color: COLOR.primaryColor,
            fontWeight: 'bold',
            marginVertical: 20,
            fontSize: 10,
          }}>
          Terms of Use
        </Text>
        <Text
          style={{
            color: COLOR.white,
            fontSize: 10,
            fontWeight: 'bold',
          }}>
          To learn more about how Spotify collect, uses, shares and protects
          your personal data, Please see the Spotify Privacy Policy.
        </Text>
        <Text
          style={{
            color: COLOR.primaryColor,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 20,
            fontSize: 10,
          }}>
          Privacy Policy
        </Text>
        <CheckBoxInput title={'Please send me news and offers from Spotify.'} />
        <CheckBoxInput
          title={
            'Share my registration data with Spotify’s content providers for marketing purposes.'
          }
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChooseArtistPage')}
        style={{
          backgroundColor: COLOR.white,
          alignSelf: 'center',
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderRadius: 100,
          position: 'absolute',
          bottom: '10%',
        }}>
        <Text
          style={{
            color: COLOR.black,
            fontWeight: 'bold',
          }}>
          Create an account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NamePage;
