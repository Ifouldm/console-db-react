import axios from 'axios';
import { Console } from './types';

const api = axios.create({
    // baseURL: 'http://localhost:3000/api', // Express API
    // baseURL: 'http://localhost:5000/api', // Local Spring API
    baseURL: 'http://obidex.com/api', // Remote Spring API
});

export const insertConsole = (payload: Console) =>
    api.post('/console', payload);
export const getAllConsoles = (page = 0, size = 10) =>
    api.get(`/consoles?page=${page}&size=${size}`);
export const updateConsoleById = (id: String, payload: Console) =>
    api.put(`/console/${id}`, payload);
export const deleteConsoleById = (id: String) => api.delete(`/console/${id}`);
export const getConsoleById = (id: String) => api.get(`/console/${id}`);
export const getAllGames = (page = 0, size = 24) =>
    api.get(`/games?page=${page}&size=${size}`);
export const getGameById = (id: String) => api.get(`/game/${id}`);

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
