import axios from 'axios';

const API_KEY = '6e0255c07ab0a5172ae69937101051b4';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND_LIST = '/trending/movie/day';
const MOVIE_BY_ID = '/movie/';
const SEARCH_INPUT = '/search/movie';
const MOVIE_INF = '/movie/';

axios.defaults.baseURL = BASE_URL;

export async function getTrendList() {
  const { data } = await axios.get(`${TREND_LIST}?api_key=${API_KEY}`);
  return data;
}

export async function getFilmByID(id) {
  const { data } = await axios.get(`${MOVIE_BY_ID}/${id}?api_key=${API_KEY}`);
  return data;
}

export async function getCast(id) {
  const { data } = await axios.get(
    `${MOVIE_INF}${id}/credits?api_key=${API_KEY}`
  );
  return data;
}

export async function getReviews(id) {
  const { data } = await axios.get(
    `${MOVIE_INF}${id}/reviews?api_key=${API_KEY}`
  );
  return data;
}

export async function getSearchFilm(query) {
  const { data } = await axios.get(
    `${SEARCH_INPUT}?api_key=${API_KEY}&query=${query}`
  );
  return data;
}
