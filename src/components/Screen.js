import { View, Text, StyleSheet } from 'react-native';
export default function Screen({ title, subtitle, children }) {
  return <View style={s.page}>
    <View style={s.heading}>
      <Text style={s.title}>{title}</Text>
      {!!subtitle && <Text style={s.subtitle}>{subtitle}</Text>}
    </View>
    {children}
  </View>;
}
const s = StyleSheet.create({
  page:{flex:1,backgroundColor:'#F8F9F7',paddingHorizontal:20,paddingTop:24},
  heading:{marginBottom:22},
  title:{fontSize:27,fontWeight:'700',color:'#25372E',textAlign:'right'},
  subtitle:{fontSize:13,color:'#89948C',textAlign:'right',marginTop:7}
});