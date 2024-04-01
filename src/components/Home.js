import Hero from "./Hero"

const Home = () => {
  return (
    <>
      <Hero text={"Welcome to React 201"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, nunc nec vehicula ultricies, nunc nec vehicula
              ultricies, nunc nec vehicula ultricies, nunc nec vehicula
              ultricies, nunc nec
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
