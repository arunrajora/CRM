import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  Switch,
  FlatList,
} from 'react-native';

function EditCustomer({ navigation }) {
  const customer = {
    id: 1,
    firstName: 'Melissa',
    lastName: 'Morris',
    region: 'North East',
    active: true,
    reminderTime: '20 January 2022, 04:44 PM',
  };
  const regions = [
    { id: 1, name: 'North East' },
    { id: 2, name: 'North West' },
    { id: 3, name: 'South East' },
    { id: 4, name: 'South West' },
    { id: 5, name: 'North' },
    { id: 6, name: 'Mid North' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        defaultValue={customer?.firstName}
        maxLength={50}
        placeholder='First Name'
      />
      <TextInput
        style={styles.input}
        defaultValue={customer?.lastName}
        maxLength={50}
        placeholder='Last Name'
      />
      <View>
        <Text>Active:</Text>
        <Switch value={customer?.active} />
      </View>
      <FlatList
        data={regions}
        renderItem={({ item: { id, name } }) => (
          <Button
            style={styles.button}
            key={id}
            title={name}
            onPress={() => alert('change region')}
          ></Button>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    borderWidth: 10,
    borderColor: 'red',
    padding: 50,
    color: 'green',
  },
});

export default EditCustomer;
