import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStoreData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};
export const readStoreData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (e) {
    // error reading value
    return null;
  }
};
export const removeAll = () => {
  AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
};
