import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie } from "../store/action/movies";

export const Movie = ({ movie }) => {
    // Aqui vamos criar um dispatcher baseado na lib react-redux; O hook se chama useDispatch
    const dispatch = useDispatch();

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
                < button className="btn btn-secondary" 
                    onClick={() => dispatch(addMovie(movie))}>
                      Adicionar aos Favoritos
                </button>
            </div>
        </div>
    );
};