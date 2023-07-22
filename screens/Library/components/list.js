import {FlatList, View, Text, Image, ImageBackground} from 'react-native';
import {COLOR} from '../../../content/Style';

const List = () => {
  const data = [
    {
      id: 3,
      type: 'liked',
      type2: 'Playlist · 58 songs',
      name: 'Liked Songs',
      uri: 'https://i.scdn.co/image/ab6761610000f178ede6e2c2886ad29725a9ebf5',
    },
    {
      id: 1,
      type: 'artist',
      type2: '',
      name: 'Tan Taşçı',
      uri: 'https://i.scdn.co/image/ab6761610000f17870892ce924c1c84c856c764a',
    },
    {
      id: 2,
      type: 'artist',
      type2: '',
      name: "Alperen bey'in en yakın arkadaşı",
      uri: 'https://i.scdn.co/image/ab67616d00001e027582716b3666a5235d5af4ea',
    },
    {
      id: 4,
      type: 'playlist',
      name: "Today's Top Hits",
      type2: 'Playlist · Spotify',
      uri: 'https://i.scdn.co/image/ab67706f000000028f08c7a754d07f324dc4f084',
    },
    {
      id: 7,
      type: 'artist',
      type2: '',
      name: 'Alperen bey',
      uri: 'https://i.scdn.co/image/ab67616d00001e027582716b3666a5235d5af4ea',
    },
    {
      id: 7,
      type: 'artist',
      type2: '',
      name: 'Aşık',
      uri: 'https://i.scdn.co/image/ab67616d00001e027582716b3666a5235d5af4ea',
    },
    {
      id: 5,
      type: 'song',
      name: 'Me and Your Mama',
      type2: 'Song · Childish Gambino',
      uri: 'https://i.scdn.co/image/ab67616d00001e027582716b3666a5235d5af4ea',
    },
    {
      id: 6,
      type: 'artist',
      type2: '',
      name: 'Ankaralı Namık',
      uri: 'https://i.scdn.co/image/ab67616d0000b27313ddb65a700cd5914caa7c1e',
    },
  ];

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 18,
              height: 18,
            }}
            source={require('../../../content/arrows.png')}
          />
          <Text
            style={{
              color: COLOR.white,
              marginLeft: 5,
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            Recently played
          </Text>
        </View>
        <Image
          style={{
            width: 15,
            height: 15,
          }}
          source={require('../../../content/grid.png')}
        />
      </View>
    );
  };

  const Artist = item => {
    const {id, uri, name, type} = item;
    console.log(item);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View>
          <ImageBackground
            style={{
              width: 66,
              height: 66,
            }}
            imageStyle={{
              borderRadius: 66,
            }}
            source={{uri: uri}}
          />
        </View>
        <View>
          <Text
            style={{
              color: COLOR.white,
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: 10,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: COLOR.lightGray,
              marginLeft: 10,
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            {type}
          </Text>
        </View>
      </View>
    );
  };

  const LikedMusic = item => {
    const {id, uri, name, type, type2} = item;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View>
          <ImageBackground
            style={{
              width: 66,
              height: 66,
            }}
            source={require('../../../content/liked.png')}
          />
        </View>
        <View>
          <Text
            style={{
              color: COLOR.white,
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: 10,
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 8,
                height: 13,
                marginLeft: 10,
              }}
              source={require('../../../content/pin.png')}
            />
            <Text
              style={{
                color: COLOR.lightGray,
                marginLeft: 5,
                fontSize: 13,
                textTransform: 'capitalize',
              }}>
              {type2}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const Playlist = item => {
    const {id, uri, name, type, type2} = item;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View>
          <ImageBackground
            style={{
              width: 66,
              height: 66,
            }}
            source={{uri: uri}}
          />
        </View>
        <View>
          <Text
            style={{
              color: COLOR.white,
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: 10,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: COLOR.lightGray,
              marginLeft: 10,
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            {type2}
          </Text>
        </View>
      </View>
    );
  };

  const Song = item => {
    const {id, uri, name, type, type2} = item;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View>
          <ImageBackground
            style={{
              width: 66,
              height: 66,
            }}
            source={{uri: uri}}
          />
        </View>
        <View>
          <Text
            style={{
              color: COLOR.white,
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: 10,
            }}>
            {name}
          </Text>
          <Text
            style={{
              color: COLOR.lightGray,
              marginLeft: 10,
              fontSize: 13,
              textTransform: 'capitalize',
            }}>
            {type2}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <FlatList
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          return <View style={{marginBottom: 200}} />;
        }}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          switch (item.type) {
            case 'artist':
              return (
                <Artist
                  key={index}
                  name={item.name}
                  type={item.type}
                  uri={item.uri}
                />
              );
              break;
            case 'liked':
              return (
                <LikedMusic
                  key={index}
                  name={item.name}
                  type={item.type}
                  type2={item.type2}
                  uri={item.uri}
                />
              );
              break;
            case 'playlist':
              return (
                <Playlist
                  key={index}
                  name={item.name}
                  type={item.type}
                  type2={item.type2}
                  uri={item.uri}
                />
              );
              break;
            case 'song':
              return (
                <Song
                  key={index}
                  name={item.name}
                  type={item.type}
                  type2={item.type2}
                  uri={item.uri}
                />
              );
              break;
          }
        }}
      />
    </View>
  );
};

export default List;
