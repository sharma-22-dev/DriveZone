import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <section className="home">
        <h1>Find Your Perfect Car</h1>

        <p>
          Welcome to DriveZone! Explore our collection and find the right car
          for your needs.
        </p>

        <Link to="/cars" className="btn">
          Explore Cars
        </Link>
      </section>

      <section>
        <h2>About DriveZone</h2>
        <p>
          DriveZone helps you explore car models, compare prices and book test
          drives.
        </p>
      </section>

      <section className="features">
        <div>
          <h3>Wide Collection</h3>
          <p>Explore cars from different brands.</p>
        </div>

        <div>
          <h3>Test Drives</h3>
          <p>Try your favourite car before buying.</p>
        </div>

        <div>
          <h3>Easy Enquiry</h3>
          <p>Contact us for car details.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
