import axios from 'axios';
import { environment } from '../environment';

interface Result {
    value: string
}

const ApiHost = environment.apiHost;

export const getRandomString = async (length: number): Promise<string> => {
    const result = await axios.get<Result>(`${ApiHost}/random/string.json?length=${length}`);
    return result.data.value;
}