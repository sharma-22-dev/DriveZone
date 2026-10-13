import useCars from "../hooks/useCars";

function ApiDemo() {
  const { cars, loading, error } = useCars();

  if (loading) {
    return <div className="container">Loading cars...</div>;
  }

  if (error) {
    return <div className="container">{error}</div>;
  }

  return (
    <div className="container">
      <h1>DriveZone Car Data</h1>
      <p>Explore our sample car collection.</p>

      <div className="car-list">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <h3>{car.name}</h3>
            <p>Brand: {car.brand}</p>
            <p>Price: ₹{car.price.toLocaleString("en-IN")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiDemo;
