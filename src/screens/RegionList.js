import { useSelector } from 'react-redux';
import { Layout, Icon, List, ListItem } from '@ui-kitten/components';
import { customerListScreenName } from '../navigation/ScreenNames';

function RegionList({ navigation }) {
  const regions = useSelector(({ regions }) => regions);
  return (
    <Layout>
      <List
        data={regions}
        renderItem={({ item: { id, name } }) => (
          <ListItem
            title={name}
            accessoryRight={<Icon name='arrow-ios-forward' />}
            onPress={() =>
              navigation.navigate(customerListScreenName, {
                id,
              })
            }
          />
        )}
      />
    </Layout>
  );
}

export default RegionList;
