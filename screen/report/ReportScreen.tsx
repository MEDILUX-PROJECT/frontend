import {Container} from '../../components/Container';
import {Typography} from '../../components/Typography';
import {Image, Modal, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../assets/StyleConstants';
import {BottomArrowIcon, LeftArrowIcon, RightArrowIcon} from '../../assets/SvgIcon';
import {Card} from '../../components/Card';

function ReportScreen() {

  const [isShowModal, setShowModal] = useState(false);

  const DummyData = ({title, date, content}: { title: string, date: string, content: string}) => (
    <Card>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>{title}</Typography>
        <RightArrowIcon width={6} height={10} color={Color.B200}/>
      </View>

      <Typography style={{ fontSize: 12, color: Color.B500, marginTop: 8 }}>{date}</Typography>

      <View style={{ borderRadius: 12, backgroundColor: "#F7F6EE", marginTop: 17, paddingVertical: 16, paddingHorizontal: 30 }}>
        <Typography style={{ fontSize: 14, color: Color.B900, textAlign: 'center' }}>{content}</Typography>
      </View>
    </Card>
  )

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 45 }}>
          <Image source={require('../../assets/images/main_logo3.png')} style={{ height: 20, width: 88, objectFit: 'fill' }} />
        </View>

        <View>
          <Typography style={{ fontSize: 18, color: Color.B700 }}>김메디님의 마음 리포트</Typography>
          <View style={{ alignItems: 'center', marginTop: 45 }}>
            <Image source={require('../../assets/images/main_logo2.png')} style={{ width: 177, height: 110, objectFit: 'fill', overflow: 'hidden' }} />
            <View style={{
              backgroundColor: Color.B800,
              paddingHorizontal: 9,
              paddingTop: 3,
              paddingBottom: 6,
              borderRadius: 20,
              marginTop: 15,
            }}>
              <Typography style={{color: '#FFF', fontSize: 12}}>234일째</Typography>
            </View>
          </View>
        </View>

        <View style={{ gap: 15, marginBottom: 150, marginTop: 35 }}>
          <View style={{ backgroundColor: '#F2F0E2', borderColor: '#DEDCD0', borderWidth: 1, borderRadius: 12, padding: 20 }}>
            <Typography style={{ fontSize: 14, fontWeight: 'semibold', textAlign: 'center', color: Color.B900, lineHeight: 25 }}>{`이번 달에 평균 주 3회, 회당 8분씩
        모아와 통화했어요.`}</Typography>
          </View>

          <View style={{ backgroundColor: Color.B600, borderRadius: 12, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography style={{ fontSize: 16, fontWeight: 'semibold', color: "#FFF"}}>마음 기록</Typography>
            <TouchableOpacity
              onPress={() => setShowModal(true)}
              hitSlop={30}
            >
              <RightArrowIcon width={8} height={12} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#FFF", borderRadius: 12, padding: 20 }}>
            <Typography style={{ fontWeight: 'semibold', fontSize: 16, textAlign: 'center', marginBottom: 15 }}>마음 그래프</Typography>

            <View style={styles.tab}>
              <View style={[styles.tabItem, { backgroundColor: '#FFF'}]}><Typography style={styles.tabItemLabel}>일별</Typography></View>
              <View style={styles.tabItem}><Typography style={[styles.tabItemLabel, { color: Color.B300 }]}>주별</Typography></View>
              <View style={styles.tabItem}><Typography style={[styles.tabItemLabel, { color: Color.B300 }]}>월별</Typography></View>
            </View>

            <Typography style={{ marginTop: 12, marginBottom: 40, textAlign: 'center', fontSize: 12, color: Color.B500 }}>2024.10.17 ~ 2024.10.23</Typography>

            <Image source={require('../../assets/images/report-graph1.png')} style={{ width: '100%', height: 235, alignSelf: 'center', objectFit: 'fill', overflow: 'hidden' }} />
          </View>

          <View style={{ backgroundColor: "#FFF", borderRadius: 12, padding: 20 }}>
            <Typography style={{ fontWeight: 'semibold', fontSize: 16, textAlign: 'center', marginBottom: 24 }}>통화 키워드</Typography>

            <Image source={require('../../assets/images/report-graph2.png')} style={{ width: '90%', height: 260, alignSelf: 'center', objectFit: 'fill', overflow: 'hidden' }} />
          </View>
        </View>
      </ScrollView>

      <Modal visible={isShowModal}>
        <Container>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 45 }}>
            <TouchableOpacity onPress={() => setShowModal(false)} hitSlop={30}>
              <LeftArrowIcon width={9} height={17} color="#000" />
            </TouchableOpacity>
            <Typography style={{ flex: 1, fontWeight: 'semibold', fontSize: 18, textAlign: 'center' }}>마음 기록</Typography>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: Color.B600, borderRadius: 12, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography style={{ fontSize: 14, fontWeight: 'semibold', color: "#FFF"}}>총 1시간 31분의 마음 기록이 모아졌어요.</Typography>
              <BottomArrowIcon width={12} height={8} color="#FFF" />
            </View>

            <View style={{ marginTop: 27 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View style={{ gap: 5 }}>
                  <Typography style={{ fontSize: 14, color: Color.B400 }}>2024.09.20 ~ 2024.10.23</Typography>
                  <Typography style={{ fontSize: 14, color: Color.B600 }}>통화 총 38건</Typography>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 7 }}>
                  <BottomArrowIcon width={10} height={8} color={Color.B600}/>
                  <Typography style={{ fontSize: 14, color: Color.B600}}>최근순</Typography>
                </View>
              </View>

              <View style={{ gap: 15, marginTop: 20, }}>
                <DummyData title="회의 중 발표 실수로 인한 실망감" date="2024.10.23 오후 6시 18분" content="“한 번의 실수가 내가 무능력하다는 것을 증명하는 것은 아니다.”" />
                <DummyData title="업무 과다와 야근으로 인한 스트레스" date="2024.10.20 오후 9시 23분" content="“지금 힘들어도 잠시 버티면 괜찮아질 거예요.”" />
                <DummyData title="친구를 만나 기분이 좋은 날" date="2024.10.15 오후 10시 43분" content="“소소한 행복을 즐기는 일상의 소중함을 깨닫자.”" />
                <DummyData title="회의 중 발표 실수로 인한 실망감" date="2024.10.10 오후 6시 18분" content="“한 번의 실수가 내가 무능력하다는 것을 증명하는 것은 아니다.”" />
              </View>
            </View>

          </ScrollView>
        </Container>
      </Modal>
    </Container>
  )
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    backgroundColor: Color.B100,
    padding: 6,
    gap: 6,
    borderRadius: 10,
    marginTop: 16,
  },
  tabItem: {
    flex: 1,
    borderRadius: 7,
    fontWeight: 'medium',
    paddingVertical: 4,
  },
  tabItemLabel: {
    textAlign: 'center',
    fontSize: 12,
  }
});

export default ReportScreen;