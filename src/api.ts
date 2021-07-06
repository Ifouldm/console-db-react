import axios from 'axios';
import { ConsoleModel } from './types';

export const insertConsole = (payload: ConsoleModel) =>
    axios.post('/api/console', payload);
export const getAllConsoles = (page = 0, size = 10, console?: String) =>
    axios.get(`/api/consoles?page=${page}&size=${size}`);
export const updateConsoleById = (id: String, payload: ConsoleModel) =>
    axios.put(`/api/console/${id}`, payload);
export const deleteConsoleById = (id: String) =>
    axios.delete(`/api/console/${id}`);
export const getConsoleById = (id: String) => axios.get(`/api/console/${id}`);
export const getAllGames = (page = 0, size = 24) =>
    axios.get(`/api/games?page=${page}&size=${size}`);
export const getGameById = (id: String) => axios.get(`/api/game/${id}`);

const apis = {
    insertConsole,
    getAllConsoles,
    updateConsoleById,
    deleteConsoleById,
    getConsoleById,
    getAllGames,
    getGameById,
};

export default apis;
