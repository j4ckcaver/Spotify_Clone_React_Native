import {View, Text, TextInput} from 'react-native';

import {COLOR, SIZE} from '../../../content/Style';

const LoginInput = ({title, desc}) => {
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
      <TextInput
        selectionColor={COLOR.primaryColor}
        style={{
          backgroundColor: COLOR.lightGray,
          height: 50,
          paddingHorizontal: SIZE.container,
          color: COLOR.white,
          borderRadius: 5,
          marginVertical: 7,
        }}
      />
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

export default LoginInput;
