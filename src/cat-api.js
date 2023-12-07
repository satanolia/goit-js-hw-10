import axios from "axios";

axios.defaults.headers.common["x-api-key"] = 'live_kDlEK1x6Be1uvdpni7z3Fe92FQI3Hs2iGkUWicFjYhgll9owgyJdMBmhkY4r7xgc';
const BASE_URL = `https://api.thecatapi.com/v1/`;

export function fetchBreeds() {
    return axios
      .get(`${BASE_URL}breeds`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }
  
  export function fetchCatByBreed(breedId) {
    return axios
      .get(`${BASE_URL}images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

