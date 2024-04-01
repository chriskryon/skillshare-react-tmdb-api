import Hero from "./Hero"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const About = () => {
  const { id } = useParams()
  console.log(id)

  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    console.log("API Request")
  }, [id])

  const API_URL = "bcbbc50ef511c912a6912595a0be1239"
  const URL = `https://api.themoviedb.org/3/movie/1?language=pt-BR&api_key=${API_URL}`

  return (
    <>
      <Hero text={"Movie detail view"} />
    </>
  )
}

export default About
