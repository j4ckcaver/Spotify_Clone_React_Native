import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLOR, SIZE} from '../../content/Style';

const StartPage = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        {/* Header */}
        <Image
          source={require('../../content/header.png')}
          style={{
            width: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
      {/* Logo And Text and Buttons */}
      <View
        style={{
          alignItems: 'center',
          marginBottom: 40,
          position: 'relative',
          top: -60,
          flex: 1,
        }}>
        <Image
          source={require('../../content/whiteLogo.png')}
          style={{marginBottom: 20}}
        />
        <Image
          source={require('../../content/headerText.png')}
          style={{marginBottom: 20}}
        />
        {/* Buttons */}
        <View
          style={{
            backgroundColor: COLOR.black,
            paddingHorizontal: SIZE.container,
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EmailPage');
            }}>
            <View
              style={{
                height: 50,
                backgroundColor: COLOR.primaryColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 45,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: COLOR.black,
                  fontWeight: 'bold',
                }}>
                Sign up free
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              height: 50,
              backgroundColor: COLOR.black,
              borderWidth: 0.6,
              borderColor: COLOR.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 45,
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../content/google.png')}
              style={{
                position: 'absolute',
                left: 20,
              }}
            />
            <Text
              style={{
                color: COLOR.white,
                fontWeight: 'bold',
              }}>
              Continue with Google
            </Text>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: COLOR.black,
              borderWidth: 0.6,
              borderColor: COLOR.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 45,
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../content/facebook.png')}
              style={{
                position: 'absolute',
                left: 20,
              }}
            />
            <Text
              style={{
                color: COLOR.white,
                fontWeight: 'bold',
              }}>
              Continue with Facebook
            </Text>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: COLOR.black,
              borderWidth: 0.6,
              borderColor: COLOR.white,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 45,
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../content/apple.png')}
              style={{
                position: 'absolute',
                left: 20,
              }}
            />
            <Text
              style={{
                color: COLOR.white,
                fontWeight: 'bold',
              }}>
              Continue with Apple
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomePage');
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLOR.white,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartPage;
