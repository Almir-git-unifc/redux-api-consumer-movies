export const ADD_MOVIE = "ADD_MOVIE"; // Constante que nomeia a ação

export const addMovie = (payload) => ({
  type: ADD_MOVIE,
  payload,
});