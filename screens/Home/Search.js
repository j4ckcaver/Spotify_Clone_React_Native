import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageStore,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR, SIZE} from '../../content/Style';

import SearchInput from '../components/searchInput';

export default function Search() {
  const datas = [
    {
      id: 1,
      listTitle: 'Your top genres',
      items: [
        {
          id: 1,
          title: 'Pop',
          bgColor: '#9854B2',
          image:
            'https://i.scdn.co/image/ab67616d00004851a935e4689f15953311772cc4',
        },
        {
          id: 2,
          title: 'Indie',
          bgColor: '#678026',
          image: '',
        },
        {
          id: 3,
          title: 'Rock',
          bgColor: 'darkgreen',
          image: '',
        },
      ],
    },
    {
      id: 2,
      listTitle: 'Popular podcast categories',
      items: [
        {
          id: 1,
          title: 'News &\nPolitics',
          bgColor: '#3371E4',
          image: '',
        },
        {
          id: 2,
          title: 'Comedy',
          bgColor: '#CF4321',
          image: '',
        },
      ],
    },
    {
      id: 3,
      listTitle: 'Popular podcast categories',
      items: [
        {
          id: 1,
          title: 'News &\nPolitics',
          bgColor: '#3371E4',
          image: '',
        },
        {
          id: 2,
          title: 'Comedy',
          bgColor: '#CF4321',
          image: '',
        },
      ],
    },
  ];

  const RenderCat = ({id, listTitle, items}) => {
    const Cat = ({title, bgColor, image, index}) => {
      return (
        <View
          style={{
            backgroundColor: bgColor,
            width: Dimensions.get('window').width / 2 - 25,
            height: 109,
            overflow: 'hidden',
            marginRight: index !== items.length - 1 ? 10 : 0,
            borderRadius: 4,
          }}>
          <Text
            style={{
              color: COLOR.white,
              fontWeight: 'bold',
              fontSize: 16,
              position: 'absolute',
              top: 20,
              left: 17,
            }}>
            {title}
          </Text>
          {image ? (
            <Image
              source={{uri: image}}
              style={{
                width: 67,
                height: 67,
                position: 'absolute',
                right: -13,
                bottom: 5,
                transform: [
                  {
                    rotate: '23deg',
                  },
                ],
                shadowColor: COLOR.black,
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            />
          ) : (
            <View
              style={{
                width: 67,
                height: 67,
                backgroundColor: COLOR.black,
                position: 'absolute',
                right: -13,
                bottom: 5,
                transform: [
                  {
                    rotate: '23deg',
                  },
                ],
                shadowColor: COLOR.black,
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLOR.white,
                  fontWeight: 'bold',
                }}>
                Album
              </Text>
            </View>
          )}
        </View>
      );
    };

    return (
      <View>
        <Text
          style={{
            color: COLOR.white,
            fontSize: 17,
            fontWeight: '600',
            marginBottom: 20,
          }}>
          {listTitle}
        </Text>

        <FlatList
          style={{
            marginBottom: 30,
          }}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={({item, index}) => (
            <Cat
              title={item.title}
              bgColor={item.bgColor}
              image={item.image}
              index={index}
            />
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.black,
      }}>
      <ScrollView>
        {/* Header */}
        <View
          style={{
            padding: 20,
            paddingBottom: 10,
          }}>
          {/* Title */}
          <Text
            style={{
              color: COLOR.white,
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            Search
          </Text>
          <SearchInput placeholder={'Artist, songs or podcasts'} />
        </View>
        {/* Content */}
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          {React.Children.toArray(
            datas.map((data, index) => {
              return (
                <RenderCat
                  listTitle={data.listTitle}
                  id={data.id}
                  items={data.items}
                />
              );
            }),
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
