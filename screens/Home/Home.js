import {Text, View} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';
export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.black,
      }}>
      <Text
        style={{
          color: COLOR.white,
        }}>
        Home!
      </Text>
    </View>
  );
}
