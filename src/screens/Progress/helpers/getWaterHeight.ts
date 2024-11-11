import getToday from './getToday';
import { getConsumption } from '../../../storage/consumption';
import { getTarget } from '../../../storage/target';

export const getWaterHeight = async (glassHeight: number): Promise<number> => {
    const today = getToday();
    const storedTarget = await getTarget();
    const storedConsumption = await getConsumption();
    const waterHeightCalc = (storedConsumption[today] * glassHeight) / storedTarget.target;
    const waterHeightByConsumption = storedConsumption[today] > 0 ? waterHeightCalc : 0;
    return waterHeightByConsumption;
};
