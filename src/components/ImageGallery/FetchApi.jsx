function fetchApi(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=22610819-610095abdb962b7788008b666&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Nothing is there by ${query}`));
  });
}
const api = { fetchApi };
export default api;
