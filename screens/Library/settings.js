import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from '../../content/Style';

import AnimatedScrollViewWithHeader from '../components/animatedScrollViewWithHeader';

const Settings = ({navigation}) => {
  const data = [
    {
      name: 'Account',
    },
    {
      name: 'Data Server',
    },
    {
      name: 'Languages',
    },
    {
      name: 'Playback',
    },
    {
      name: 'Explicit Content',
    },
    {
      name: 'Devices',
    },
    {
      name: 'Car',
    },
    {
      name: 'Social',
    },
    {
      name: 'Voice Assistant & Apps',
    },
    {
      name: 'Audio Quality',
    },
    {
      name: 'Stoarage',
    },
  ];
  const Item = ({name, liked, lastPlaylist}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{color: COLOR.white, fontSize: 14, marginVertical: 10}}>
              {name}
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
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: COLOR.black,
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  source={require('../../content/pp.png')}
                />
              </View>
            </View>
            <View
              style={{
                marginLeft: 15,
              }}>
              <Text
                style={{color: COLOR.white, fontWeight: 'bold', fontSize: 15}}>
                Maya
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text
                  style={{
                    color: COLOR.lightGray,
                    marginTop: 6,
                    fontSize: 10,
                  }}>
                  View Profile
                </Text>
              </TouchableOpacity>
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
        {data.map((data, index) => {
          return (
            <Item
              key={index}
              name={data.name}
              liked={data.liked}
              lastPlaylist={data.lastPlaylist}
            />
          );
        })}
        <View
          style={{
            height: 200,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Settings;
