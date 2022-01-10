import { StyleSheet, Text, View, Button } from 'react-native';

function CustomerList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Customer List screen Screen</Text>
      <Button
        title='View customer'
        onPress={() => navigation.navigate('CustomerDetails')}
      ></Button>
      <Button
        title='Edit customer'
        onPress={() => navigation.navigate('CustomerEdit')}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomerList;
