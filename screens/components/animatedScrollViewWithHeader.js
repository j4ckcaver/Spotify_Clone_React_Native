import {
  Text,
  Image,
  TouchableOpacity,
  Animated,
  View,
  ScrollView,
} from 'react-native';
import {useState, useRef, useEffect} from 'react';
import {COLOR, SIZE} from '../../content/Style';

const AnimatedScrollViewWithHeader = props => {
  // const translation = useRef(new Animated.Value(-100)).current;
  const scrolling = useRef(new Animated.Value(0)).current;

  const translation = scrolling.interpolate({
    inputRange: [0, 130],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  // useEffect(() => {
  //   Animated.timing(translation, {
  //     toValue: headerShown ? 0 : -100,
  //     duration: 250,
  //     useNativeDriver: true,
  //   }).start();
  // }, [headerShown]);

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          right: 0,
          height: 100,
          backgroundColor: COLOR.black,
          transform: [{translateY: translation}],
          zIndex: 1,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingBottom: 20,
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
        <Text
          style={{
            fontWeight: 'bold',
            color: COLOR.white,
          }}>
          Maya
        </Text>
        <Image
          style={{
            width: 22,
            height: 22,
            marginTop: 10,
            tintColor: COLOR.white,
          }}
          source={require('../../content/option.png')}
        />
      </Animated.View>
      <Animated.ScrollView
        bounces={false}
        // onScroll={event => {
        //   const scrolling = event.nativeEvent.contentOffset.y;
        //   if (scrolling > 100) {
        //     setHeaderShown(true);
        //   } else {
        //     setHeaderShown(false);
        //   }
        // }}
        // // onScroll will be fired every 16ms
        // scrollEventThrottle={16}

        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        style={{
          flex: 1,
          backgroundColor: COLOR.black,
        }}>
        {props.children}
      </Animated.ScrollView>
    </>
  );
};

export default AnimatedScrollViewWithHeader;
