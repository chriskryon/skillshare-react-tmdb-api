/* eslint-disable react-hooks/exhaustive-deps */

import Hero from "./Hero"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const MovieView = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  console.log(id)
  const API_URL = "bcbbc50ef511c912a6912595a0be1239"
  const URL = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=${API_URL}`

  useEffect(() => {
    console.log("API Request")
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data)
          setIsLoading(false)
        }, 2000)
      })
  }, [id])

  function renderMovieDetails() {
    if (isLoading) return <Hero text={"Loading..."} />
    if (movieDetails) {
      const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
      console.log(backdropUrl)

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div
            className="bg-dark container text-light my-5"
            data-bs-theme="dark"
          >
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterUrl}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return renderMovieDetails()
}

export default MovieView
