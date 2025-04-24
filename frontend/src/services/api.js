// API service
import axios from 'axios';

const API_URL='https://dummyapi.online/api/movies';

//fetchurl
export const fetchMovies = async() =>{
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }
    catch (error){
        console.log('Error fetching movies:', error);
        throw error;
    }
};

//fetchmovie
export const fetchMovieById = async(id) =>{
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }
    catch (error){
        console.log('Error fetching movies:', error);
        throw error;
    }
};