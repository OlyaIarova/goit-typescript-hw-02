import axios from 'axios';
import { ImageInterface } from '../components/App/App.types';

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async (
  searchQuery: string, //рядок, що представляє пошуковий запит
  currantPage: number //число, що представляє поточну сторінку для пагінації.
): Promise<ImageInterface[]> => {//повертає проміс,  масиву об'єктів
  const response = await axios.get(`search/photos/`, {
    params: {
      client_id: `-cUxxX-eTqFLgcrho8-WkPDv09IXejeeFohcUu8oLqg`,
      query: searchQuery,
      per_page: 12,
      page: currantPage,
      orientation: `landscape`,
    },
  });
  return response.data.results;
};


