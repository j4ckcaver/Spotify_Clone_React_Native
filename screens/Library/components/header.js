import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLOR, SIZE} from '../../../content/Style';
const Header = ({navigation}) => {
  return (
    <View
      style={{
        height: 55,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            style={{
              height: 34,
              width: 34,
            }}
            source={require('../../../content/pp.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: COLOR.white,
            marginLeft: 10,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Your Library
        </Text>
      </View>
      <View>
        <Image
          style={{
            width: 26,
            height: 26,
            tintColor: COLOR.lightGray,
          }}
          source={require('../../../content/plus.png')}
        />
      </View>
    </View>
  );
};

export default Header;
