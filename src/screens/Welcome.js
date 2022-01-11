import { StyleSheet, Text, View, Button } from 'react-native';

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to CRM</Text>
      <Button
        title='View all regions'
        onPress={() => navigation.navigate('RegionList')}
      ></Button>
      <Button title='Clear Storage'></Button>
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

export default Welcome;
