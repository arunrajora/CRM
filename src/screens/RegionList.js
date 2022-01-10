import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

function RegionList({ navigation }) {
  const regions = [
    { id: 1, name: 'North East' },
    { id: 2, name: 'North West' },
    { id: 3, name: 'South East' },
    { id: 4, name: 'South West' },
    { id: 5, name: 'North' },
    { id: 6, name: 'Mid North' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={regions}
        renderItem={({ item: { id, name } }) => (
          <Button
            key={id}
            title={name}
            onPress={() => navigation.navigate('CustomerList')}
          ></Button>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default RegionList;
