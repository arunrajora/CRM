import { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Layout, Button, Text, Card } from '@ui-kitten/components';
import moment from 'moment';
import { useSelector } from 'react-redux';

function Customer({ navigation, route }) {
  const customer = useSelector(({ customers }) =>
    customers.find(({ id }) => id === route.params.id)
  );

  const customerRegion = useSelector(
    ({ regions }) => regions.find(({ id }) => id === customer.region)?.name
  );

  return (
    <Layout>
      <SafeAreaView>
        <Card
          header={
            <Layout>
              <Text category='h3'>
                {customer.firstName} {customer.lastName}
              </Text>
              <Button
                status={customer.active ? 'info' : 'basic'}
                size='tiny'
                category='p2'
                style={styles.button}
              >
                {customer.active ? 'Active' : 'Not Active'}
              </Button>
            </Layout>
          }
        >
          <Text category='s1'>
            Region: <Text category='p1'>{customerRegion}</Text>
          </Text>
          {customer.reminderTime ? (
            <>
              <Text category='s1'>
                Reminder:{' '}
                <Text category='p1'>
                  {customer.reminderTime}
                  {moment(customer.reminderTime).format('LLLL')}
                </Text>
              </Text>
              <Text style={styles.text} category='p2'>
                ({moment(customer.reminderTime).fromNow()})
              </Text>
            </>
          ) : (
            <Text category='s1'>No reminder set</Text>
          )}
        </Card>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center',
  },
});

export default Customer;
