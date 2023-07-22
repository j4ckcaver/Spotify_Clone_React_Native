import {View, Text} from 'react-native';
const BottomSheet = ({show}) => {
  return (
    <>
      {show ? (
        <View>
          <Text>Bottom Sheet {show}</Text>
        </View>
      ) : null}
    </>
  );
};

export default BottomSheet;
