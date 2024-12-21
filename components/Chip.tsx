import {Text, View} from 'react-native';
import {Typography} from './Typography';
import {Color} from '../assets/StyleConstants';

type ChipProps = {
  title: string;
}

export const Chip = ({title}: ChipProps) => {
  return (
    <View style={{
      alignSelf: 'flex-start',
      backgroundColor: Color.MAIN20,
      paddingHorizontal: 9,
      paddingTop: 3,
      paddingBottom: 6,
      borderRadius: 20,
    }}>
      <Typography style={{color: '#4FAE9B', fontSize: 12}}>
        {title}
      </Typography>
    </View>
  )
}