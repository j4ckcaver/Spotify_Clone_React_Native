import {
  ImageBackground,
  Image,
  Pressable,
  Animated,
  View,
  Text,
} from 'react-native';
import {useRef} from 'react';
import {COLOR, SIZE} from '../../../content/Style';

const ArtistButton = ({name, src, selectedArtist, setSelectedArtist}) => {
  const pressAnim = useRef(new Animated.Value(1)).current;

  const animOnPress = () => {
    Animated.timing(pressAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  const animOnPressOut = () => {
    Animated.timing(pressAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: pressAnim,
          },
        ],
      }}>
      <Pressable
        onPressIn={() => {
          animOnPress();
        }}
        onPressOut={() => {
          animOnPressOut();
          if (selectedArtist.findIndex(x => x == name) != -1) {
            setSelectedArtist([...selectedArtist.filter(x => x != name)]);
          } else {
            setSelectedArtist([...selectedArtist, name]);
          }
        }}
        style={({pressed}) => [
          {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          },
        ]}>
        <ImageBackground
          imageStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 100,
            borderRadius: 100,
          }}
          source={{uri: src}}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          {(selectedArtist.length > 0
            ? selectedArtist.findIndex(x => x == name)
            : -1) != -1 ? (
            <View
              style={{
                width: 32,
                height: 32,
                position: 'absolute',
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLOR.white,
                borderRadius: 32,
              }}>
              <Image
                style={{
                  width: 16,
                  height: 16,
                }}
                source={require('../../../content/tick.png')}
              />
            </View>
          ) : null}
        </ImageBackground>

        <Text
          style={{
            color: COLOR.white,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default ArtistButton;
