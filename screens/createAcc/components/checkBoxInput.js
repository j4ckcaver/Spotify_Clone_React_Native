import {View, Text} from 'react-native';
import {COLOR, SIZE} from '../../../content/Style';

const CheckBoxInput = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
      <View
        style={{
          width: '90%',
        }}>
        <Text
          style={{
            color: COLOR.white,
            fontWeight: 'bold',
            fontSize: 10,
          }}>
          {title}
        </Text>
      </View>
      <View>
        <View
          style={{
            width: 24,
            height: 24,
            borderWidth: 2,
            borderRadius: 20,
            borderColor: COLOR.lightGray,
          }}></View>
      </View>
    </View>
  );
};

export default CheckBoxInput;
