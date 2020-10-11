import axios from 'axios';
import e from 'express';
import { environment } from '../environment';

interface Result {
    ok: boolean
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
    try {
        const result = await axios.get<Result>(url);
        return result.data.value;
    } catch (error) {
        const response = error.response.data as Result;
        if (response) {
            return Promise.reject(Error(error.response.data.message));
        } else {
            return Promise.reject(error);
        }
    }
}

export const getRandomChoose = async (data: string): Promise<string> => {
    const url = `${ApiHost}/random/choose.json?data=${data}`;
    const result = await axios.get<Result>(url);
    return result.data.value;
}