import AsyncStorage from '@react-native-async-storage/async-storage';

export async function clearDataFromStorage() {
  const keys = await AsyncStorage.getAllKeys();
  if (keys.length) {
    await AsyncStorage.clear();
  }
}

export async function saveRegions(regions) {
  return AsyncStorage.setItem('regions', JSON.stringify(regions));
}

export async function getRegions() {
  const regions = await AsyncStorage.getItem('regions');
  if (regions !== null) {
    return JSON.parse(regions);
  }
  return null;
}

export async function saveCustomers(customers) {
  return AsyncStorage.setItem('customers', JSON.stringify(customers));
}

export async function getCustomers() {
  const customers = await AsyncStorage.getItem('customers');
  if (customers !== null) {
    return JSON.parse(customers);
  }
  return null;
}

export async function saveCustomer(customer) {}
