import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="container">
      <h1>Our Services</h1>

      <p>
        DriveZone offers services to make your car buying experience simple and
        convenient.
      </p>

      <div className="features">
        <div>
          <h3>Test Drive</h3>
          <p>Try your preferred car before making a decision.</p>
          <Link to="test-drive">Learn More</Link>
        </div>

        <div>
          <h3>Car Finance</h3>
          <p>Explore finance options for your next car.</p>
        </div>

        <div>
          <h3>Car Maintenance</h3>
          <p>Get information about regular car servicing.</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;
