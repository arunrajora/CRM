import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

function RegionList({ navigation }) {
  const regions = useSelector(({ regions }) => regions);
  return (
    <View style={styles.container}>
      <FlatList
        data={regions}
        renderItem={({ item: { id, name } }) => (
          <Button
            key={id}
            title={name}
            onPress={() =>
              navigation.navigate('CustomerList', {
                id,
                name,
              })
            }
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
