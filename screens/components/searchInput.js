import {View, Text, Image} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';

const SearchInput = ({placeholder}) => {
  return (
    <View
      style={{
        backgroundColor: COLOR.white,
        marginVertical: 20,
        height: 42,
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 17,
          height: 17,
          marginRight: 10,
        }}
        source={require('../../content/Search_Solid.png')}
      />
      <Text
        style={{
          fontSize: 14,
          color: COLOR.blackf,
        }}>
        {placeholder ? placeholder : 'Search'}
      </Text>
    </View>
  );
};

export default SearchInput;
