/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <>
      <div
        className="col-lg-3 col-md-3 col-2 my-4 text-bg-dark"
        data-bs-theme="dark"
      >
        <div className="card">
          <img
            src={posterUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.original_title}</p>
            <a href={"#"} className="btn btn-primary">
              Show Details
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
