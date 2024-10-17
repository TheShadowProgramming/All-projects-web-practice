import "./home.css";

function Home(props) {
  let myVar = "somethingString";

  return (
    <>
      <div className="homePage" style={{ backgroundColor: "transparent" }}>
        <div className="homeTextWrapper">
          <h1 className="homeText">
            IGNITING
            <br />
            BRANDS,
            <br />
            EMPOWERING
            <br />
            SUCCESS
          </h1>
          <p className="welcomeHome">
            WELCOME TO PARAM
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
