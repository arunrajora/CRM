import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';

function CustomerList({ navigation, route }) {
  const customers = useSelector(({ customers }) =>
    customers.filter(({ region }) => route.params.id === region)
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customers}
        renderItem={({ item }) => (
          <Button
            key={item.id}
            title={`${item.firstName} ${item.lastName}`}
            onPress={() =>
              navigation.navigate('CustomerDetails', {
                ...item,
              })
            }
          ></Button>
        )}
      />
      <Button
        title='Add customer'
        onPress={() => navigation.navigate('CustomerEdit')}
        color='#841584'
      ></Button>
    </SafeAreaView>
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
