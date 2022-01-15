import { StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout, Icon, List, ListItem, Button } from '@ui-kitten/components';
import {
  customerDetailsScreenName,
  customerEditScreenName,
} from '../navigation/ScreenNames';

function CustomerList({ navigation, route }) {
  const customers = useSelector(({ customers }) =>
    customers.filter(({ region }) => route.params.id === region)
  );

  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <List
          data={customers}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.firstName} ${item.lastName}`}
              description={item.active ? 'Active' : 'Inactive'}
              accessoryRight={<Icon name='arrow-ios-forward' />}
              onPress={() =>
                navigation.navigate(customerDetailsScreenName, {
                  id: item.id,
                })
              }
            />
          )}
        />
        <Button
          style={styles.button}
          onPress={() => navigation.navigate(customerEditScreenName)}
          appearance='filled'
          accessoryLeft={<Icon name='person-add' />}
        >
          Add customer
        </Button>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 10,
  },
});

export default CustomerList;
