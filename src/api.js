import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertConsole = (payload) => api.post('/console', payload);
export const getAllConsoles = () => api.get('/consoles');
export const updateConsoleById = (id, payload) => api.put(`/console/${id}`, payload);
export const deleteConsoleById = (id) => api.delete(`/console/${id}`);
export const getConsoleById = (id) => api.get(`/console/${id}`);

const apis = {
    insertConsole,
    getAllConsoles,
    updateConsoleById,
    deleteConsoleById,
    getConsoleById,
};

export default apis;
