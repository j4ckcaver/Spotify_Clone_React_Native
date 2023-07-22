import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, SIZE} from '../../content/Style';
import AnimatedScrollViewWithHeader from '../components/animatedScrollViewWithHeader';

export default function Profile({navigation}) {
  const data = [
    {
      id: 1,
      name: 'Shazam',
      liked: '7 Likes',
      lastPlaylist: [
        {
          id: 1,
          uri: 'https://i.scdn.co/image/ab67616d00004851a47c0e156ea3cebe37fdcab8',
        },
        {
          id: 2,
          uri: 'https://i.scdn.co/image/ab67616d0000485157db4e3ca6a227ed612ad0b8',
        },
        {
          id: 3,
          uri: 'https://i.scdn.co/image/ab67616d0000485102854a7060fccc1a66a4b5ad',
        },
        {
          id: 4,
          uri: 'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
      ],
    },
    {
      id: 2,
      name: 'Road Trip',
      liked: '4 Likes',
      lastPlaylist: [
        {
          id: 1,
          uri: 'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
        {
          id: 2,
          uri: 'https://i.scdn.co/image/ab67616d000048517845f74d6db14b400fa61cd3',
        },
        {
          id: 3,
          uri: 'https://i.scdn.co/image/ab67616d000048510c471c36970b9406233842a5',
        },
        {
          id: 4,
          uri: 'https://i.scdn.co/image/ab67616d00004851f2d2adaa21ad616df6241e7d',
        },
      ],
    },
    {
      id: 3,
      name: 'Playlist',
      liked: '0 Likes',
      lastPlaylist: [],
    },
    {
      id: 1,
      name: 'Shazam',
      liked: '7 Likes',
      lastPlaylist: [
        {
          id: 1,
          uri: 'https://i.scdn.co/image/ab67616d00004851a47c0e156ea3cebe37fdcab8',
        },
        {
          id: 2,
          uri: 'https://i.scdn.co/image/ab67616d0000485157db4e3ca6a227ed612ad0b8',
        },
        {
          id: 3,
          uri: 'https://i.scdn.co/image/ab67616d0000485102854a7060fccc1a66a4b5ad',
        },
        {
          id: 4,
          uri: 'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
      ],
    },
    {
      id: 2,
      name: 'Road Trip',
      liked: '4 Likes',
      lastPlaylist: [
        {
          id: 1,
          uri: 'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
        {
          id: 2,
          uri: 'https://i.scdn.co/image/ab67616d000048517845f74d6db14b400fa61cd3',
        },
        {
          id: 3,
          uri: 'https://i.scdn.co/image/ab67616d000048510c471c36970b9406233842a5',
        },
        {
          id: 4,
          uri: 'https://i.scdn.co/image/ab67616d00004851f2d2adaa21ad616df6241e7d',
        },
      ],
    },
    {
      id: 3,
      name: 'Playlist',
      liked: '0 Likes',
      lastPlaylist: [],
    },
    {
      id: 1,
      name: 'Shazam',
      liked: '7 Likes',
      lastPlaylist: [
        {
          id: 1,
          uri: 'https://i.scdn.co/image/ab67616d00004851a47c0e156ea3cebe37fdcab8',
        },
        {
          id: 2,
          uri: 'https://i.scdn.co/image/ab67616d0000485157db4e3ca6a227ed612ad0b8',
        },
        {
          id: 3,
          uri: 'https://i.scdn.co/image/ab67616d0000485102854a7060fccc1a66a4b5ad',
        },
        {
          id: 4,
          uri: 'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
      ],
    },
    {
      id: 2,
      name: 'Road Trip',
      liked: '4 Likes',
      lastPlaylist: [
        {
          id: 1,
          uri: 'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
        {
          id: 2,
          uri: 'https://i.scdn.co/image/ab67616d000048517845f74d6db14b400fa61cd3',
        },
        {
          id: 3,
          uri: 'https://i.scdn.co/image/ab67616d000048510c471c36970b9406233842a5',
        },
        {
          id: 4,
          uri: 'https://i.scdn.co/image/ab67616d00004851f2d2adaa21ad616df6241e7d',
        },
      ],
    },
    {
      id: 3,
      name: 'Playlist',
      liked: '0 Likes',
      lastPlaylist: [],
    },
  ];

  const Playlist = ({name, liked, lastPlaylist}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={
              lastPlaylist.length > 0
                ? {
                    width: 60,
                    height: 60,
                    alignContent: 'flex-start',
                    flexWrap: 'wrap',
                  }
                : {
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLOR.blackTwo,
                  }
            }>
            {lastPlaylist.length > 0 ? (
              lastPlaylist.map((img, index) => {
                return (
                  <View key={index}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      source={{uri: img.uri}}
                    />
                  </View>
                );
              })
            ) : (
              <View>
                <Image
                  style={{
                    width: 22,
                    height: 20,
                    tintColor: COLOR.lightGray,
                  }}
                  source={require('../../content/music.png')}
                />
              </View>
            )}
          </View>
          <View
            style={{
              marginLeft: 15,
            }}>
            <Text
              style={{color: COLOR.white, fontWeight: 'bold', fontSize: 15}}>
              {name}
            </Text>
            <Text style={{color: COLOR.lightGray, marginTop: 6, fontSize: 13}}>
              {liked}
            </Text>
          </View>
        </View>
        <Image
          style={{
            width: 16,
            height: 16,
            transform: [
              {
                rotate: '180deg',
              },
            ],
          }}
          source={require('../../content/ChevronLeftProfile.png')}
        />
      </View>
    );
  };

  return (
    <AnimatedScrollViewWithHeader>
      {/* Header */}
      <View
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={['#01667B', '#121212']}
          style={{
            width: '100%',
            flex: 1,
          }}>
          <SafeAreaView>
            {/* Header Buttons */}
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                height: '10%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                hitSlop={{
                  bottom: 20,
                  top: 20,
                  left: 20,
                  right: 20,
                }}>
                <Image
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 10,
                  }}
                  source={require('../../content/ChevronLeftProfile.png')}
                />
              </TouchableOpacity>
              <Image
                style={{
                  width: 22,
                  height: 22,
                  marginTop: 10,
                  tintColor: COLOR.white,
                }}
                source={require('../../content/option.png')}
              />
            </View>
            {/* Profile Image */}
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '90%',
              }}>
              <View>
                <ImageBackground
                  style={{
                    width: 125,
                    height: 123,
                  }}
                  source={require('../../content/pp.png')}
                />
                {/* Button */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Settings')}>
                  <View
                    style={{
                      alignSelf: 'center',
                      backgroundColor: COLOR.darkGray,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      borderRadius: 50,
                      width: 125,
                      marginTop: 15,
                    }}>
                    <Text
                      style={{
                        color: COLOR.white,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 12,
                      }}>
                      Edit Profile
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLOR.white,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    23
                  </Text>
                  <Text
                    style={{
                      color: COLOR.gray,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      marginTop: 10,
                    }}>
                    Playlist
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLOR.white,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    58
                  </Text>
                  <Text
                    style={{
                      color: COLOR.gray,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      marginTop: 10,
                    }}>
                    Followers
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 20,
                  }}>
                  <Text
                    style={{
                      color: COLOR.white,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    43
                  </Text>
                  <Text
                    style={{
                      color: COLOR.gray,
                      textTransform: 'uppercase',
                      fontSize: 10,
                      marginTop: 10,
                    }}>
                    Following
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
      {/* Content */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: COLOR.white,
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 5,
            marginBottom: 20,
          }}>
          Playlist
        </Text>
        {data.map((data, index) => {
          return (
            <Playlist
              key={index}
              name={data.name}
              liked={data.liked}
              lastPlaylist={data.lastPlaylist}
            />
          );
        })}
        {data.length !== 0 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 100,
            }}>
            <Text
              style={{
                color: COLOR.white,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              See All Playlists
            </Text>
            <Image
              style={{
                width: 16,
                height: 16,
                transform: [
                  {
                    rotate: '180deg',
                  },
                ],
              }}
              source={require('../../content/ChevronLeftProfile.png')}
            />
          </View>
        )}
      </View>
    </AnimatedScrollViewWithHeader>
  );
}
