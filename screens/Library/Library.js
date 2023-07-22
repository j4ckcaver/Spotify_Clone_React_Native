import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, SIZE} from '../../content/Style';

import Header from './components/header';
import Filter from './components/filter';
import List from './components/list';

export default function Library({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
        paddingHorizontal: 18,
      }}>
      <Header navigation={navigation} />
      <Filter />
      <List />
    </SafeAreaView>
  );
}
