import { getConsumption } from '../../../storage/consumption';
import { getTarget } from '../../../storage/target';

export const getWaterHeight = async (glassHeight: number): Promise<number> => {
    const storedTarget = await getTarget();
    const storedConsumption = await getConsumption();
    const waterHeightCalc = (storedConsumption.consumption * glassHeight) / storedTarget.target;
    const waterHeightByConsumption = storedConsumption.consumption > 0 ? waterHeightCalc : 0;
    return waterHeightByConsumption;
};
