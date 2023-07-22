import {SafeAreaView, View, Text} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';

import SearchInput from '../components/searchInput';
import ListPodCast from '../components/listPodcast';

import LinearGradient from 'react-native-linear-gradient';
import NextButtonThree from './components/nextButtonThree';

const ChoosePodcastPage = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
      }}>
      {/* Header */}
      <View
        style={{
          padding: 20,
        }}>
        {/* Title */}
        <Text
          style={{
            color: COLOR.white,
            fontSize: 26,
            fontWeight: 'bold',
          }}>
          Now choose some {'\n'}podcasts.
        </Text>
        <SearchInput />
      </View>
      <View
        style={{
          paddingHorizontal: SIZE.container,
        }}>
        <ListPodCast />
      </View>
      <LinearGradient
        colors={[
          // 'rgba(18,18,18,0)',
          // 'rgba(18,18,18,0.2)',
          // 'rgba(18,18,18,0.4)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0.5)',
          'rgba(0,0,0,1)',
        ]}
        style={{
          width: '100%',
          height: '24%',
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NextButtonThree
          onPress={() => {
            navigation.navigate('HomePage');
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ChoosePodcastPage;
