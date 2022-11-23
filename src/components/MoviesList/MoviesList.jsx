import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  return (
    <section className="moviesList">
      <ul className="list moviesList__grid">
        <li><MovieCard/></li>
        <li><MovieCard/></li>
        <li><MovieCard/></li>
        <li><MovieCard/></li>
        <li><MovieCard/></li>
        <li><MovieCard/></li>
        <li><MovieCard/></li>
        <li><MovieCard/></li>
      </ul>
      <button type="button" className="button moviesList__button">Ещё</button>
    </section>
  )
}

export default MoviesList;