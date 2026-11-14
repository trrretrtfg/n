import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Screen from '../../src/components/Screen';

export default function MemoriesScreen() {
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;
    await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], allowsMultipleSelection: true, quality: 0.9 });
  };
  return <Screen title="ذكرياتك" subtitle="مساحتك الخاصة للحظات التي تستحق البقاء">
    <Pressable style={s.add} onPress={pickImage}>
      <Ionicons name="add" size={22} color="#FFFFFF" />
      <Text style={s.addText}>إضافة ذكرى</Text>
    </Pressable>
    <View style={s.empty}>
      <View style={s.icon}><Ionicons name="images-outline" size={34} color="#789181" /></View>
      <Text style={s.emptyTitle}>ابدأ بصناعة ذكرياتك</Text>
      <Text style={s.emptyText}>ستظهر صورك وذكرياتك هنا بعد إضافتها.</Text>
    </View>
  </Screen>;
}
const s=StyleSheet.create({
 add:{backgroundColor:'#496B5A',borderRadius:16,padding:16,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:8},
 addText:{color:'#FFF',fontSize:15,fontWeight:'600'},
 empty:{flex:1,alignItems:'center',justifyContent:'center',paddingBottom:80},
 icon:{width:76,height:76,borderRadius:24,backgroundColor:'#EAF0EB',alignItems:'center',justifyContent:'center',marginBottom:18},
 emptyTitle:{fontSize:18,fontWeight:'700',color:'#34483B'},
 emptyText:{fontSize:13,color:'#929B94',marginTop:8,textAlign:'center'}
});