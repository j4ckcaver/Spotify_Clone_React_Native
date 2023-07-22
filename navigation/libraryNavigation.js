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
import Library from '../screens/Library/Library';
import Profile from '../screens/Library/profile';
import Settings from '../screens/Library/settings';

function LibraryNavigation() {
  return (
    <>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <Stack.Navigator
        // initialRouteName="Library"
        screenOptions={{
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Library"
          options={{
            headerShown: false,
          }}
          component={Library}
        />
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
          component={Profile}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: COLOR.blackTwo,
            },
            headerTintColor: COLOR.white,
            title: 'Settings',
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
                    padding: 7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderBottomWidth: 0,
                  }}>
                  <Image
                    style={{
                      width: 16,
                      height: 16,
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
      </Stack.Navigator>
    </>
  );
}

export default LibraryNavigation;
