import AsyncStorage from '@react-native-async-storage/async-storage';

export type ConsumptionType = {
  [key: string]: number
}

const storeConsumptiom = async (value: ConsumptionType) => {
    try {
      const jsonValue = JSON.stringify(value);
      const currentData = await AsyncStorage.getItem('my-consumption')
      if (currentData != null) {
        await AsyncStorage.mergeItem('my-consumption', jsonValue);
      } else {
        await AsyncStorage.setItem('my-consumption', jsonValue);
      }
    } catch (e) {
      // saving error
    }
};



const getConsumption = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-consumption');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
};

export { storeConsumptiom, getConsumption };
