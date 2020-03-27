import axios from "axios";

const fetchShow = () => {
  // returns a promise
  return axios.get(
    "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
  );
};

export default fetchShow;
