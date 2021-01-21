import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000/api', // Express API
    baseURL: 'http://localhost:5000/api', // Spring API
});

export const insertConsole = (payload) => api.post('/console', payload);
export const getAllConsoles = () => api.get('/consoles');
export const updateConsoleById = (id, payload) => api.put(`/console/${id}`, payload);
export const deleteConsoleById = (id) => api.delete(`/console/${id}`);
export const getConsoleById = (id) => api.get(`/console/${id}`);
export const getAllGames = (page = 0) => api.get(`/games?page=${page}`);
export const getGameById = (id) => api.get(`/game/${id}`);

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
