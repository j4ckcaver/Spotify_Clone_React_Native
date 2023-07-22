import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';

import {useState} from 'react';

import PickerInput from './components/pickerInput';
import NextButton from './components/nextButton';
import BottomSheet from '../components/bottomSheet';

const GenderPage = ({navigation}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <BottomSheet show={show}></BottomSheet>
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.black,
          paddingHorizontal: SIZE.container,
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <PickerInput title={'What’s your gender?'} />
        </TouchableOpacity>
        <NextButton
          onPress={() => {
            navigation.navigate('NamePage');
          }}
        />
      </View>
    </>
  );
};

export default GenderPage;
