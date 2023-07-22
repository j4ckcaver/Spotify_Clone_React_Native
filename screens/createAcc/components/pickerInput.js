import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';


import {COLOR, SIZE} from '../../../content/Style';

const PickerInput = ({title, desc}) => {
  const [selectedValue, setSelectedValue] = useState('Select your gender');

  function renderBottomSheet() {
    return (
      <></>
    );
  }

  return (
    <View>
      {/* Title */}
      <Text
        style={{
          color: COLOR.white,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {title}
      </Text>
      {/* Input */}
      <View
        style={{
          backgroundColor: COLOR.lightGray,
          height: 50,
          paddingHorizontal: SIZE.container,
          color: COLOR.white,
          borderRadius: 5,
          marginVertical: 7,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLOR.white,
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {selectedValue}
        </Text>
      </View>
      {/* Desc */}
      <Text
        style={{
          color: COLOR.white,
          fontWeight: 'bold',
          fontSize: 10,
        }}>
        {desc}
      </Text>
    </View>
  );
};

export default PickerInput;
