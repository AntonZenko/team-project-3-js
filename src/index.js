import axios from 'axios';

const API_KEY = 'ffda232ba1095b2db867c38e7745d8d7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

async function fetchGetTrending(pageValue) {
  const { data } = await axios.get(
    `/trending/all/day?api_key=${API_KEY}&page=${pageValue}`
  );
  const { results, total_pages, page, total_results } = data;
  return { results, total_pages, page, total_results };
}
console.log(fetchGetTrending(1));
