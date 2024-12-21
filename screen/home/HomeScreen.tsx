import {Container} from '../../components/Container';
import {Typography} from '../../components/Typography';
import {ButtonStyle, Color} from '../../assets/StyleConstants';
import React from 'react';
import {Image, View} from 'react-native';
import {Card} from '../../components/Card';
import {Chip} from '../../components/Chip';
import {TextButton} from '../../components/TextButton';
import {IconButton} from '../../components/IconButton';
import {CallIcon} from '../../assets/SvgIcon';
import {CircleView} from '../../components/CircleView';
import {BottomTab} from '../../components/BottomTab';

function HomeScreen() {
  return (
    <Container>
      <View style={{ marginBottom: 45 }}>
        <Image source={require('../../assets/images/main_logo3.png')} style={{ height: 20, width: 88, objectFit: 'fill' }} />
      </View>

      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ height: 110, justifyContent: 'space-between'}}>
          <View>
            <Typography style={{ fontSize: 18, fontWeight: 'medium', color: Color.B700 }}>김메디님의 마음 휴식</Typography>
            <Typography style={{ fontSize: 18, fontWeight: 'medium', color: Color.B700 }}>
              <Typography style={{ fontSize: 32, fontWeight: 'bold', color: '#000'}}>234</Typography>
              일째
            </Typography>
          </View>
          <Typography style={{ fontSize: 16, fontWeight: 'medium', color: Color.B700 }}>12월 25일 수요일</Typography>
        </View>

        <Image source={require('../../assets/images/main_logo2.png')} style={{ width: 177, height: 110, objectFit: 'fill', overflow: 'hidden' }} />
      </View>

      <Card style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60 }}>
        <View>
          <Typography style={{ fontSize: 12, color: '#727272' }}>내 통화시간</Typography>
          <View style={{ flexDirection: 'row', gap: 6, marginTop: 10 }}>
            <Chip title="오후"/>
            <Typography style={{ fontSize: 16, fontWeight: 'semibold' }}>매일 8시 23분</Typography>
          </View>
        </View>

        <TextButton title="변경하기" type={ButtonStyle.TYPE1} fontSize={12} style={{ width: 64, height: 30 }} />
      </Card>

      <Card style={{ marginTop: 15, alignItems: 'center', padding: 33}}>
        <View style={{ marginBottom: 40 }}>
          <CircleView style={{ width: 92, height: 92, marginBottom: 15 }}>
            <Image source={require('../../assets/images/main_logo1.png')} style={{ width: 31, height: 48 }} />
          </CircleView>
          <Typography style={{ fontWeight: 'semibold', fontSize: 20, textAlign: 'center' }}>모아</Typography>
        </View>

        <IconButton type={ButtonStyle.TYPE1} style={{ width: '100%', height: 79 }}>
          <CallIcon width={20.43} height={22} color="#FFF"/>
          <Typography style={{ fontSize: 16, fontWeight: 'semibold', color: '#FFF', marginTop: 8 }}>전화하기</Typography>
        </IconButton>
      </Card>

    </Container>
  )
}

export default HomeScreen;