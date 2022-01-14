import { useState } from 'react';
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

import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';

function EditCustomer({ navigation, route }) {
  const customer = useSelector(({ customers }) =>
    customers.find(({ id }) => id === route.params?.id)
  );
  const regions = useSelector(({ regions }) => regions);

  const [firstName, setFirstName] = useState(customer?.firstName ?? '');
  const [lastName, setLastName] = useState(customer?.lastName ?? '');
  const [isActive, setIsActive] = useState(customer?.active ?? false);
  const [region, setRegion] = useState(customer?.region ?? 0);
  const [reminderTime, setReminderTime] = useState(new Date()); //customer?.reminderTime);

  const [show, setShow] = useState(Platform.OS === 'ios');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setReminderTime(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={firstName}
        maxLength={50}
        placeholder='First Name'
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        defaultValue={lastName}
        maxLength={50}
        placeholder='Last Name'
        onChangeText={setLastName}
      />
      <View>
        <Text>Active:</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>
      <Text>Region:</Text>
      <Picker
        selectedValue={region}
        onValueChange={setRegion}
        style={{
          alignSelf: 'stretch',
        }}
      >
        {regions.map(({ id, name }) => (
          <Picker.Item key={id} label={name} value={id} />
        ))}
      </Picker>
      <Text>Set Reminder at-</Text>
      <View>
        {Platform.OS !== 'ios' && (
          <View>
            <Button onPress={showDatepicker} title='Show!' />
          </View>
        )}
        {Platform.OS === 'ios' && (
          <DateTimePicker
            value={reminderTime}
            mode='datetime'
            is24Hour={false}
            display='spinner'
            onChange={onChange}
            textColor={'black'}
            style={{
              alignSelf: 'stretch',
              width: 350,
            }}
          />
        )}
        {show && Platform.OS !== 'ios' && (
          <>
            <DateTimePicker
              value={reminderTime}
              mode='date'
              is24Hour={false}
              display='default'
              onChange={onChange}
              style={{
                color: 'black',
                alignSelf: 'stretch',
                width: 300,
              }}
            />
            <DateTimePicker
              value={reminderTime}
              mode='time'
              is24Hour={false}
              display='default'
              onChange={onChange}
              style={{
                color: 'black',
                alignSelf: 'stretch',
                width: 300,
              }}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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
