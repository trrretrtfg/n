import { View, Text, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';
export default function RoomsScreen(){return <Screen title="الغرف" subtitle="شارك لحظاتك مع الأشخاص المقربين">
<View style={s.card}><Text style={s.title}>لا توجد غرف بعد</Text><Text style={s.body}>ستتمكن من إنشاء غرفة ودعوة الأشخاص إليها هنا.</Text></View>
</Screen>}
const s=StyleSheet.create({card:{backgroundColor:'#FFF',padding:22,borderRadius:18,borderWidth:1,borderColor:'#EEF0ED'},title:{fontSize:16,fontWeight:'700',color:'#34483B',textAlign:'right'},body:{fontSize:13,color:'#89948C',textAlign:'right',marginTop:8,lineHeight:21}});