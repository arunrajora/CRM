import { StyleSheet, Text, View, Button } from 'react-native';

function EditCustomer({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Customer Edit Screen</Text>
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

export default EditCustomer;
