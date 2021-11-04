import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

const setParams = ({ query = "cat", page = 1 }) => {
  axios.defaults.params = {
    q: query,
    key: "23801243-e85441bee56b02cd6046c9902",
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
    page,
  };
};

export const getApi = (query) => {
  setParams({ query });
  return axios
    .get(axios.defaults.baseURL)
    .then(({ data }) => data.hits)
    .catch((err) => {
      throw err;
    });
};
