import { intialDevelopers } from '@/data';
import { Developer } from '../types';
export const getDevelopers = async (): Promise<Developer[]> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return new Promise((resolve) => {
        resolve (intialDevelopers)
    })
}