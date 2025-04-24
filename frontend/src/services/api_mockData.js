// src/services/api.js - Updated with fallback to mock data
import axios from 'axios';
import { getMockMovies, getMockMovieById } from './mockData';

const API_URL = 'https://dummyapi.online/api/movies';

// Flag to determine if we should use mock data
const USE_MOCK_DATA = true; // Set this to false when the real API works

export const fetchMovies = async () => {
  if (USE_MOCK_DATA) {
    console.log('Using mock movie data');
    return getMockMovies();
  }
  
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies from API, falling back to mock data:', error);
    return getMockMovies();
  }
};

export const fetchMovieById = async (id) => {
  if (USE_MOCK_DATA) {
    console.log(`Using mock data for movie id: ${id}`);
    return getMockMovieById(id);
  }
  
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with id ${id}, falling back to mock data:`, error);
    return getMockMovieById(id);
  }
};