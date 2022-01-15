import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';

function Welcome({ navigation }) {
  const dispatch = useDispatch();
  return (
    <Layout style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <Text category='h1'>Welcome!</Text>
        </View>
        <Button
          size='giant'
          style={styles.primaryButton}
          onPress={() => navigation.navigate('RegionList')}
        >
          View all regions
        </Button>
        <Button
          appearance='ghost'
          size='medium'
          status='danger'
          accessoryLeft={<Icon name='trash' />}
          onPress={() => {
            dispatch({ type: 'CLEAR_DATA' });
            alert('Data cleared!');
          }}
        >
          Clear Storage
        </Button>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: 40,
  },
  heading: {
    flexGrow: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    marginBottom: 10,
  },
});

export default Welcome;
