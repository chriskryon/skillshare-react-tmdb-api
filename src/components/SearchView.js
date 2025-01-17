import Hero from "./Hero"
import MovieCard from "./MovieCard"

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  )
}

export default SearchView
