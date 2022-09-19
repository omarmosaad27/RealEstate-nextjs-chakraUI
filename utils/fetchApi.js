import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'b69aac3324msh6fec4deac4b00e3p1412bejsna4d2b73ee6b4',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};
