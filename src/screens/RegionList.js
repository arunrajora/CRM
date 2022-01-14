import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Layout, Icon, List, ListItem } from '@ui-kitten/components';

function RegionList({ navigation }) {
  const regions = useSelector(({ regions }) => regions);
  return (
    <Layout style={styles.container}>
      <List
        data={regions}
        renderItem={({ item: { id, name } }) => (
          <ListItem
            title={name}
            accessoryRight={<Icon name='arrow-ios-forward' />}
            onPress={() =>
              navigation.navigate('CustomerList', {
                id,
              })
            }
          />
        )}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RegionList;
