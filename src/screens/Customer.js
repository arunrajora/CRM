import { StyleSheet, Text, View, Button } from 'react-native';

function Customer({ navigation }) {
  const customer = {
    id: 1,
    firstName: 'Melissa',
    lastName: 'Morris',
    region: 'North East',
    active: false,
    reminderTime: '20 January 2022, 04:44 PM',
  };
  return (
    <View style={styles.container}>
      <Text>
        Name: {customer.firstName} {customer.lastName}
      </Text>
      <Text>Region: {customer.region}</Text>
      <Text>{customer.active ? 'Active' : 'Not Active'}</Text>
      <Text>Reminder for {customer.reminderTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 24,
  },
});

export default Customer;
