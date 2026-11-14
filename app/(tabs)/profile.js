import { Text, View, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';
export default function ProfileScreen(){return <Screen title="حسابي" subtitle="إعدادات حساب ذِكرى">
<View style={s.card}><Text style={s.title}>مرحباً بك في ذِكرى</Text><Text style={s.body}>سيظهر ملفك الشخصي وإعدادات الحساب هنا بعد ربط المصادقة.</Text></View>
</Screen>}
const s=StyleSheet.create({card:{backgroundColor:'#FFF',padding:22,borderRadius:18,borderWidth:1,borderColor:'#EEF0ED'},title:{fontSize:16,fontWeight:'700',color:'#34483B',textAlign:'right'},body:{fontSize:13,color:'#89948C',textAlign:'right',marginTop:8,lineHeight:21}});