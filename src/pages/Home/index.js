import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Sara Silva"/>

        <Balance saldo="9.250.90" gastos="-527,00"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});