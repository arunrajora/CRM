import { StyleSheet, Text, View, Button } from 'react-native';

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title='View all regions'
        onPress={() => navigation.navigate('RegionList')}
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

export default Welcome;
