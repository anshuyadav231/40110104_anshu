import axios from 'axios';

const API_BASE_URL = 'http://104.211.219.98/train';

export const registerCompany = async (rollNumber) => {
  const response = await axios.post(`${API_BASE_URL}/register`, { rollNumber });
  return response.data;
};

export const getAllTrains = async () => {
  const response = await axios.get(`${API_BASE_URL}/trains`);
  return response.data;
};


export const getTrainById = async (trainId) => {
  const response = await axios.get(`${API_BASE_URL}/trains/${trainId}`);
  return response.data;
};
