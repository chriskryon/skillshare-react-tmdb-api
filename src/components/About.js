import Hero from "./Hero"

const About = () => {
  return (
    <>
      <Hero text={"About us"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              About us ultricies, nunc nec vehicula ultricies, nunc nec vehicula
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
