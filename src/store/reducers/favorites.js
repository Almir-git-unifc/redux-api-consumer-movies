import { ADD_MOVIE, REMOVE_MOVIE } from "../action/movies";

const initialState = {
    movies: [],
};

export const favorites = (state = initialState, action) => {
    // vamos lembrar que a action tem um type e um payload na estrutura
    switch (action.type) {
        // case nome_contante: adiciona no array-movies do initialState
        // Vamos retornar o estado atual ...state para garantir que
        //  não mexeremos em outra coisa desnecessariamente
        // action.payload pois futuramente passaremos um objeto que representa o filme
        case ADD_MOVIE:
            return {
                ...state, // retorna o estado anterior para evitar erros.
                movies: state.movies.concat(action.payload)
            }
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload.id)
            }
         default:
            return state;
    }
};