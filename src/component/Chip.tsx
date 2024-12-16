import {Text, View} from 'react-native';

type ChipProps = {
  title: string;
}

export const Chip = ({title}: ChipProps) => {
  return (
    <View style={{
      alignSelf: 'flex-start',
      backgroundColor: '#DCEFEB',
      paddingHorizontal: 9,
      paddingTop: 3,
      paddingBottom: 6,
      borderRadius: 20,
    }}>
      <Text style={{color: '#4FAE9B', fontSize: 12}}>
        {title}
      </Text>
    </View>
  )
}