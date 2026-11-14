import { Text, View, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';
export default function NotificationsScreen(){return <Screen title="الإشعارات" subtitle="كل جديد يخص ذكرياتك وغرفك">
<View style={s.empty}><Text style={s.text}>لا توجد إشعارات حالياً</Text></View>
</Screen>}
const s=StyleSheet.create({empty:{flex:1,alignItems:'center',justifyContent:'center',paddingBottom:90},text:{color:'#929B94',fontSize:14}});