import {Route, Routes} from "react-router-dom"; 
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";
import { Favorites } from "./views/Favorites"

export const ApplicationRoutes = () => ( 
    <Routes> 
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/movie/:id" element={<MovieDetail/>}></Route>
        <Route exact path="/favorites" element={<Favorites/>}></Route>
    </Routes> 
);