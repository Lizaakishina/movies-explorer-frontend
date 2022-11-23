import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({type}) => {
  return (
    <section className="moviesList">
      <ul className="list moviesList__grid">
        <li><MovieCard type={type}/></li>
        <li><MovieCard type={type}/></li>
        <li><MovieCard type={type}/></li>
        {type==="movies" && <li><MovieCard type={type}/></li>}
        {type==="movies" && <li><MovieCard type={type}/></li>}
        {type==="movies" && <li><MovieCard type={type}/></li>}
        {type==="movies" && <li><MovieCard type={type}/></li>}
        {type==="movies" && <li><MovieCard type={type}/></li>}
      </ul>
      {type==="movies" && <button type="button" className="button moviesList__button">Ещё</button>}
    </section>
  )
}

export default MoviesList;