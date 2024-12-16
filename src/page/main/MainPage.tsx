import {Container} from 'component/Container.tsx';
import {Button, Image, Text, View} from 'react-native';
import {Card} from 'component/Card.tsx';
import {Chip} from 'component/Chip.tsx';
import {TextButton} from 'component/TextButton.tsx';
import {CircleView} from 'component/CircleView.tsx';
import {Font} from 'assets/StyleConfig.tsx';
import {Typography} from 'component/Typography.tsx';
import {IconButton} from 'component/IconButton.tsx';

export function MainPage() {
  return (
    <Container>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32, marginTop: 30}}>
        <Image source={require('../../assets/image/logo_icon2.png')}/>

        <View style={{flexDirection: 'row', gap: 18}}>
          <Image width={24} height={24} source={require('../../assets/icon/icon_bell.png')}/>
          <Image width={24} height={24} source={require('../../assets/icon/icon_setting.png')}/>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
         <View style={{alignContent: 'space-between', marginBottom: 25}}>
           <Typography color='#494F4D'>김메디님의 마음 휴식</Typography>
           <Typography color='#494F4D'><Typography bold='bold' fontSize={32} color='#000'>365</Typography>일째</Typography>
         </View>

         <Typography color='#494F4D' fontSize={Font.BODY3}>12월 25일 수요일</Typography>
       </View>

        <View style={{justifyContent: 'flex-end'}}>
          <Image style={{width: 176.81, height: 100.36}} source={require('../../assets/image/logo_icon3.png')}/>
        </View>
      </View>

      <Card style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 53
      }}>
        <View>
          <Typography color='#727272' fontSize={Font.BODY5}>내 통화시간</Typography>

          <View style={{flexDirection: 'row', gap: 6, marginTop: 11 }}>
            <Chip title="오후"/>
            <Typography bold='semibold' fontSize={Font.BODY3}>매일 8시 23분</Typography>
          </View>
        </View>

        <TextButton title="변경하기" style={{ width: 64, height: 30 }}/>
      </Card>


      <Card style={{justifyContent: 'center', alignItems: 'center', gap: 15, height: 309}}>
        <CircleView>
          <Image
            source={require('../../assets/image/logo_icon1.png')}
            style={{width: 31, height: 48}}
          />
        </CircleView>

        <Typography fontSize={Font.HEAD2} bold='semibold'>모아</Typography>

        <IconButton style={{width: 291, height: 79}}>
          <Image width={20.43} height={22} source={require('../../assets/icon/icon_call.png')}/>
          <Typography bold='semibold' fontSize={Font.BODY3} color='#FFF'>전화하기</Typography>
        </IconButton>
      </Card>

    </Container>
  )
}