import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import { Routes, Route } from "react-router-dom"
import SearchView from "./components/SearchView"
import { useEffect, useState } from "react"

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const API_URL = "bcbbc50ef511c912a6912595a0be1239"
    // https://api.themoviedb.org/3/search/movie?api_key=bcbbc50ef511c912a6912595a0be1239&language=en-US&query=star&page=1&include_adult=false
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_URL}&language=pt-BR&query=${searchText}&page=1&include_adult=false`

    if (searchText) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
