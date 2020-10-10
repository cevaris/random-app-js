import axios from 'axios';
import { environment } from '../environment';

interface Result {
    value: string
}

const ApiHost = environment.apiHost;

export const getRandomString = async (length: number): Promise<string> => {
    const url = `${ApiHost}/random/string.json?length=${length}`;
    const result = await axios.get<Result>(url);
    return result.data.value;
}

export const getRandomNumber = async (min: number, max: number): Promise<string> => {
    const url = `${ApiHost}/random/number.json?min=${min}&max=${max}`;
    const result = await axios.get<Result>(url);
    return result.data.value;
}