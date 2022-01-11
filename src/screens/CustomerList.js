import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';

function CustomerList({ navigation, route }) {
  const customers = [
    {
      id: 1,
      firstName: 'Melissa',
      lastName: 'Morris',
      region: 1,
      active: false,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 2,
      firstName: 'Andrea',
      lastName: ' Bell',
      region: 2,
      active: true,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 3,
      firstName: 'Valerie',
      lastName: 'Bennett',
      region: 3,
      active: true,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 4,
      firstName: 'Donald',
      lastName: ' Wong',
      region: 1,
      active: true,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 5,
      firstName: 'Scott',
      lastName: ' Cantu',
      region: 3,
      active: false,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 6,
      firstName: 'Jennifer',
      lastName: 'Long',
      region: 1,
      active: true,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 7,
      firstName: 'Kathleen',
      lastName: 'Stewart',
      region: 1,
      active: false,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 8,
      firstName: 'Raymond',
      lastName: 'Adkins',
      region: 3,
      active: true,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 9,
      firstName: 'John',
      lastName: ' Brooks',
      region: 2,
      active: false,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 10,
      firstName: 'Jennifer',
      lastName: 'Hall',
      region: 5,
      active: true,
      reminderTime: '20 January 2022, 04:44 PM',
    },
    {
      id: 11,
      firstName: 'Wanda',
      lastName: 'Knox',
      region: 6,
      active: false,
      reminderTime: '20 January 2022, 04:44 PM',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customers.filter(({ region }) => route.params.id === region)}
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
