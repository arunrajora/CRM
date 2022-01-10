import { StyleSheet, Text, View, Button } from 'react-native';

function RegionList({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Region List Screen</Text>
      <Button
        title='View all customers'
        onPress={() => navigation.navigate('CustomerList')}
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

export default RegionList;
