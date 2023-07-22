import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageBackground} from 'react-native';

import {View, Text} from 'react-native';

// Screens
import HomeScreen from '../screens/Home/Home';
import SearchScreen from '../screens/Home/Search';

import LibraryNavigation from './libraryNavigation';

import {COLOR, SIZE} from '../content/Style';

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <>
      <>
        <View
          style={{
            backgroundColor: '#161b21',
            height: 60,
            width: '95%',
            position: 'absolute',
            bottom: 80,
            zIndex: 1,
            alignSelf: 'center',
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/* Music */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              {/* Picture */}
              <ImageBackground
                style={{
                  width: 40,
                  height: 40,
                }}
                imageStyle={{
                  borderRadius: 6,
                }}
                source={{
                  uri: 'https://i.scdn.co/image/ab6761610000f17870892ce924c1c84c856c764a',
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: COLOR.white,
                    fontWeight: 'bold',
                  }}>
                  Yalvarırım{'  '}·{'  '}
                  <Text
                    style={{
                      color: COLOR.gray,
                      fontWeight: 'normal',
                    }}>
                    Tan Taşçı
                  </Text>
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      width: 13,
                      height: 13,
                    }}
                    resizeMode={'contain'}
                    source={require('../content/Bluetooth.png')}
                  />
                  <Text
                    style={{
                      color: COLOR.primaryColor,
                      fontSize: 10.5,
                    }}>
                    Emir Can'ın Iphonu
                  </Text>
                </View>
              </View>
            </View>
            {/* Buttons */}
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 14,
                  height: 20,
                  marginRight: 30,
                }}
                source={require('../content/Bluetooth.png')}
              />
              <Image
                style={{
                  width: 14,
                  height: 20,
                }}
                source={require('../content/pauseButton.png')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '70%',
            height: 3,
            backgroundColor: COLOR.gray,
            position: 'absolute',
            zIndex: 2,
            bottom: 78,
            left: 20,
            borderRadius: 100,
          }}
        />
        <View
          style={{
            width: '90%',
            height: 3,
            alignSelf: 'center',
            backgroundColor: COLOR.lightGray,
            position: 'absolute',
            zIndex: 1,
            bottom: 78,
            borderRadius: 100,
          }}
        />
      </>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabelStyle: {
            color: COLOR.white,
            fontSize: 11,
          },
          tabBarStyle: {
            backgroundColor: COLOR.black,
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => {
            let iconSrc;
            switch (route.name) {
              case 'Home':
                iconSrc = focused
                  ? require('../content/Home_Solid.png')
                  : require('../content/Home_outline.png');
                break;
              case 'Search':
                iconSrc = focused
                  ? require('../content/Search_Solid.png')
                  : require('../content/Search_outline.png');
                break;
              case 'LibraryNavigation':
                iconSrc = focused
                  ? require('../content/Library_Solid.png')
                  : require('../content/Library_outline.png');
                break;
            }
            return (
              <Image
                style={{
                  tintColor: focused ? COLOR.white : COLOR.lightGray,
                  width: 20,
                  height: 20,
                }}
                source={iconSrc}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Search"
          options={{
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <Tab.Screen
          name="LibraryNavigation"
          options={{
            headerShown: false,
            title: 'Library',
          }}
          component={LibraryNavigation}
        />
      </Tab.Navigator>
    </>
  );
}
