import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {COLOR, SIZE} from '../../../content/Style';
const Filter = () => {
  const data = [
    {
      id: 1,
      title: 'Playlists',
      route: '',
    },
    {
      id: 2,
      title: 'Artists',
      route: '',
    },
    {
      id: 3,
      title: 'Albums',
      route: '',
    },
    {
      id: 4,
      title: 'Podcasts & Shows',
      route: '',
    },
  ];

  const Badge = ({item}) => {
    const {title, route} = item;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0.6,
          borderColor: COLOR.white,
          borderRadius: 45,
        }}>
        <Text
          style={{
            color: COLOR.white,
            fontSize: 11,
            marginVertical: 8,
            marginHorizontal: 13,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        // backgroundColor: 'red',
      }}>
      {React.Children.toArray(
        data.map(x => {
          return <Badge item={x} />;
        }),
      )}
    </View>
  );
};

export default Filter;
