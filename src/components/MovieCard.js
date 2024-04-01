import { Link } from "react-router-dom"

/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`

  return (
    <>
      <div
        className="col-lg-3 col-md-3 col-2 my-4 text-bg-dark"
        data-bs-theme="dark"
      >
        <div className="card border border-warning">
          <img
            src={posterUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.original_title}</p>
            <Link to={detailUrl} className="btn btn-primary">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
