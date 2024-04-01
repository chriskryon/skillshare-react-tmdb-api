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
    if (movieDetails) return <Hero text={movieDetails.original_title} />
  }

  return renderMovieDetails()
}

export default MovieView
