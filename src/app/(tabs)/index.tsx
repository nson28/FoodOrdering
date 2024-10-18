import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={ styles.title }> Pizza Peperoni</Text>
      <Text style= { styles.price }> $12.99</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title:{
    fontSize:18, 
    fontWeight:'600',
    marginVertical:10,
  },
  price:{
    color:Colors.light.tint,

  }
});
