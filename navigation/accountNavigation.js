import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {COLOR, SIZE} from '../content/Style';

// Screens
import StartPage from '../screens/createAcc/startPage';
import EmailPage from '../screens/createAcc/emailPage';
import PassPage from '../screens/createAcc/passPage';
import GenderPage from '../screens/createAcc/genderPage';
import NamePage from '../screens/createAcc/namePage';
import ChooseArtistPage from '../screens/createAcc/chooseArtistPage';
import ChoosePodcastPage from '../screens/createAcc/choosePodcastPage';

// Navigations
import HomeNavigation from './homeNavigation';

function AccountNavigation() {
  return (
    <>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="GenderPage"
          screenOptions={{
            headerShadowVisible: false,
          }}>
          <Stack.Screen
            name="StartPage"
            options={{
              headerShown: false,
            }}
            component={StartPage}
          />
          <Stack.Screen
            name="EmailPage"
            component={EmailPage}
            options={({navigation}) => ({
              headerStyle: {
                backgroundColor: COLOR.black,
              },
              headerTintColor: COLOR.white,
              title: 'Create account',
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontWeight: '800',
                fontSize: 16,
              },
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#000000',
                      padding: 7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                      borderBottomWidth: 0,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'relative',
                        right: 1,
                        tintColor: COLOR.white,
                      }}
                      source={require('../content/left-arrow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ),
            })}
          />
          <Stack.Screen
            name="PassPage"
            component={PassPage}
            options={({navigation}) => ({
              headerStyle: {
                backgroundColor: COLOR.black,
              },
              headerTintColor: COLOR.white,
              title: 'Create account',
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontWeight: '800',
                fontSize: 16,
              },
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#000000',
                      padding: 7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                      borderBottomWidth: 0,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'relative',
                        right: 1,
                        tintColor: COLOR.white,
                      }}
                      source={require('../content/left-arrow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ),
            })}
          />
          <Stack.Screen
            name="GenderPage"
            component={GenderPage}
            options={({navigation}) => ({
              headerStyle: {
                backgroundColor: COLOR.black,
              },
              headerTintColor: COLOR.white,
              title: 'Create account',
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontWeight: '800',
                fontSize: 16,
              },
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#000000',
                      padding: 7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                      borderBottomWidth: 0,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'relative',
                        right: 1,
                        tintColor: COLOR.white,
                      }}
                      source={require('../content/left-arrow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ),
            })}
          />
          <Stack.Screen
            name="NamePage"
            component={NamePage}
            options={({navigation}) => ({
              headerStyle: {
                backgroundColor: COLOR.black,
              },
              headerTintColor: COLOR.white,
              title: 'Create account',
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontWeight: '800',
                fontSize: 16,
              },
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#000000',
                      padding: 7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                      borderBottomWidth: 0,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'relative',
                        right: 1,
                        tintColor: COLOR.white,
                      }}
                      source={require('../content/left-arrow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ),
            })}
          />
          <Stack.Screen
            name="ChooseArtistPage"
            component={ChooseArtistPage}
            options={({navigation}) => ({
              headerStyle: {
                backgroundColor: COLOR.black,
              },
              headerTintColor: COLOR.white,
              title: 'Choose 3 or more artist you like.',
              headerBackTitleVisible: false,
              headerTitleStyle: {
                fontWeight: '800',
                fontSize: 16,
              },
              headerLeft: () => (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#000000',
                      padding: 7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 20,
                      borderBottomWidth: 0,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        position: 'relative',
                        right: 1,
                        tintColor: COLOR.white,
                      }}
                      source={require('../content/left-arrow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ),
            })}
          />
          <Stack.Screen
            name="ChoosePodcastPage"
            component={ChoosePodcastPage}
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="HomePage"
            component={HomeNavigation}
            options={({navigation}) => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AccountNavigation;
