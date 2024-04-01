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
