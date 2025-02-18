import { intialDevelopers } from '@/data';
import { Developer } from '../types';
/**
 * Retrieves a list of developers.
 *
 * This function simulates an asynchronous operation by introducing a delay of 2 seconds
 * before resolving with the initial list of developers.
 *
 * @returns {Promise<Developer[]>} A promise that resolves to an array of Developer objects.
 */
export const getDevelopers = async (): Promise<Developer[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return new Promise((resolve) => {
        resolve (intialDevelopers)
    })
}

export default getDevelopers;