import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import { Routes, Route } from "react-router-dom"
import SearchView from "./components/SearchView"
import { useState } from "react"

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")

  const handleSearch = (keyword) => {
    const API_URL = "bcbbc50ef511c912a6912595a0be1239"
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_URL}&language=en-US&query=${keyword}&page=1&include_adult=false`

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results)
        console.log(data.results)
      })
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
