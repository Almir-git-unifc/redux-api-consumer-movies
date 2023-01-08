import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addMovie } from "../store/action/movies";
import { removeMovie } from "../store/action/movies";

export const Movie = ({ movie }) => {
    // Aqui vamos criar um dispatcher baseado na lib react-redux; O hook se chama useDispatch
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    return (
        <div className="movie-item">
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
            </div>
            <div className="movie-excerpt">
                <h3>{movie.title}</h3>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    Ver detalhes
                </Link>

                {
                    // vamos fazer um if ternário, se já foi marcado será listado btn remover
                    favorites.movies.find(m => m.id === movie.id)
                        ? 
                        (
                            <button className="btn btn-danger" onClick={() => dispatch(
                                removeMovie(movie))}>  Remover dos Favoritos
                            </button>
                        ) 
                        :
                        (
                          < button className="btn btn-secondary" onClick={() =>         
                             dispatch(addMovie(movie))}>
                                   Adicionar aos Favoritos
                          </button>
                        ) 
                }
            </div>
        </div>
    );
};