import {View, Text, FlatList, ImageBackground} from 'react-native';
import {COLOR, SIZE} from '../../content/Style';

const ListPodCast = () => {
  const podcastData = [
    {
      id: 1,
      isCategory: false,
      name: 'Karanlık Dosyalar',
      uri: 'https://i.scdn.co/image/ab67656300005f1f871c6249acc1ef291fe75e6c',
    },
    {
      id: 2,
      isCategory: false,
      name: 'Olay Yeri: Suç Hikayeleri',
      uri: 'https://i.scdn.co/image/ab67656300005f1f792e5204822bf4124d492c9d',
    },
    {
      id: 3,
      isCategory: true,
      name: 'More in True crime',
      uri: '#C92D5C',
    },
    {
      id: 4,
      isCategory: false,
      name: 'Mesut Süre ile Rabarba',
      uri: 'https://i.scdn.co/image/ab67656300005f1f28e5b73ff7d1122b496aa1a1',
    },
    {
      id: 5,
      isCategory: false,
      name: 'Anlatamadım',
      uri: 'https://i.scdn.co/image/ab67656300005f1f4b0bbfd43b92609803dc29a0',
    },
    {
      id: 6,
      isCategory: true,
      name: 'More in Comedy',
      uri: '#75140C',
    },
    {
      id: 7,
      isCategory: false,
      name: 'Oysa herkes öldürür sevdiğini',
      uri: 'https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1',
    },
    {
      id: 8,
      isCategory: false,
      name: 'Kirli Yüzlü Melek',
      uri: 'https://i.scdn.co/image/6f15af4b29b6c5a8589092a9da929697e6502419',
    },
    {
      id: 9,
      isCategory: true,
      name: 'More in Stories',
      uri: '#0D2916',
    },
    {
      id: 10,
      isCategory: false,
      name: 'Uyku Hikayeleri',
      uri: 'https://i.scdn.co/image/6f353390c27468d650195522a836dd48db5f6bb2',
    },
    {
      id: 11,
      isCategory: false,
      name: 'Çocuklarla Masallara',
      uri: 'https://i.scdn.co/image/6720b8e36f897aa598ef844a3a5996fbedb6b48b',
    },
    {
      id: 12,
      isCategory: true,
      name: 'More in Relationships',
      uri: '#4B5B81',
    },
  ];

  const ListItem = ({item}) => {
    const {id, name, uri, isCategory} = item;
    return !isCategory ? (
      <View
        style={{
          flex: 1,
          marginRight: 17,
          marginBottom: 20,
        }}>
        <ImageBackground
          style={{
            width: '100%',
            height: 114,
          }}
          imageStyle={{
            borderRadius: 5,
          }}
          source={{uri}}
          resizeMode={'contain'}
        />
        <Text
          //   numberOfLines={2}
          style={{
            color: COLOR.white,
            marginTop: 10,
            width: 114,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          marginBottom: 20,
        }}>
        <View
          style={{
            width: '100%',
            height: 114,
            borderRadius: 5,
            backgroundColor: uri,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}>
          <Text
            style={{
              color: COLOR.white,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {name}
          </Text>
        </View>
        <Text
          //   numberOfLines={2}
          style={{
            color: COLOR.white,
            marginTop: 10,
            fontWeight: 'bold',
            textAlign: 'center',
            opacity: 0,
          }}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      numColumns={3}
      keyExtractor={(item, index) => index}
      showsVerticalScrollIndicator={false}
      data={podcastData}
      renderItem={({item, index}) => <ListItem index={index} item={item} />}
      ListFooterComponent={() => {
        return <View style={{marginBottom: 300}} />;
      }}
    />
  );
};

export default ListPodCast;
