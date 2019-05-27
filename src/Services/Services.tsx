import axios from "axios";
const githubEndPoint = "https://api.github.com";

export const getUsers = (url: string) => {
  return axios.get(`${githubEndPoint}/search/users?q=${url}`)
    .then(r => r.data.items)
    .catch(e => console.log(e.message));
};

export const getDetails = (url: string) => {
  return axios.get(`${githubEndPoint}/users/${url}`)
    .then(r => r.data)
    .catch(e => console.log(e.message));
};

export const getSomething = (url: string) => {
  return axios.get(url)
    .then(r => r.data)
    .catch(e => console.log(e.message));
};
