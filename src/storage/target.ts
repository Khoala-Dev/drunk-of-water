import AsyncStorage from '@react-native-async-storage/async-storage';

export type TargetType = {
    target: string
}

const storeTarget = async (value: TargetType) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-target', jsonValue);
    } catch (e) {
      console.error(e);
    }
};

const getTarget = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-target');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
    }
};

export { storeTarget, getTarget };
