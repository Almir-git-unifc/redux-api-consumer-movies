import { useSelector } from "react-redux";

export const Favorites = () => {
   const favorites = useSelector(state => state.favorites)
   // state.favorites é o nome do reducer
   // a pasta reducer contém favorite.js
   return(
       <section>
          <h1>Meus filmes favoritos</h1>
          <ul>
          { 
          	favorites.movies.map(movie => <li>{movie.title}</li>)
          }
          </ul>
       </section>
   );
};