import {View, Text, TouchableOpacity} from 'react-native';

import {COLOR, SIZE} from '../../../content/Style';

const NextButtonThree = props => {
  return (
    <View
      style={{
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: COLOR.white,
        borderRadius: 21,
        marginTop: 46,
      }}>
      <TouchableOpacity
        {...props}
        hitSlop={{top: 26, bottom: 26, left: 26, right: 26}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButtonThree;
