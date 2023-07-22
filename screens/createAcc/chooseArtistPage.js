import {View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, SIZE} from '../../content/Style';
import {useState, useEffect} from 'react';

import NextButtonTwo from './components/nextButtonTwo';
import SearchInput from '../components/searchInput';
import ArtistButton from './components/artistButton';

const ChooseArtistPage = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(21)).map((v, i) => {
      return {
        id: i,
        src: 'https://unsplash.it/100/100?image=' + (i + 1),
      };
    });
    setDataSource(items.reverse());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
      }}>
      <View
        style={{
          paddingHorizontal: SIZE.container,
        }}>
        <SearchInput />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={dataSource}
          renderItem={({item}) => (
            <ArtistButton
              selectedArtist={selectedArtist}
              setSelectedArtist={setSelectedArtist}
              name={item.id}
              src={item.src}
            />
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
          ListFooterComponent={() => {
            return <View style={{marginBottom: 200}} />;
          }}
        />
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
          height: '20%',
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {selectedArtist.length > 2 ? (
          <NextButtonTwo
            onPress={() => {
              navigation.navigate('ChoosePodcastPage');
            }}
          />
        ) : (
          <View
            style={{
              alignSelf: 'center',
              paddingHorizontal: 24,
              paddingVertical: 12,
              backgroundColor: COLOR.white,
              borderRadius: 21,
              marginTop: 46,
            }}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                {selectedArtist.length == 0
                  ? 'Please select'
                  : 'Last ' + (3 - selectedArtist.length)}
              </Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default ChooseArtistPage;
