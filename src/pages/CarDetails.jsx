import { useParams, Link } from "react-router-dom";

const cars = [
  { id: 1, name: "Tata Nexon", brand: "Tata", price: 900000 },
  { id: 2, name: "Hyundai Creta", brand: "Hyundai", price: 1200000 },
  { id: 3, name: "Maruti Swift", brand: "Maruti", price: 650000 },
  { id: 4, name: "Honda City", brand: "Honda", price: 1200000 },
  { id: 5, name: "Mahindra Thar", brand: "Mahindra", price: 1500000 },
  { id: 6, name: "Toyota Innova", brand: "Toyota", price: 1900000 },
];

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <div className="container">
        <h2>Car not found</h2>
        <Link to="/cars">Back to Cars</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{car.name}</h1>
      <p>Brand: {car.brand}</p>
      <p>Price: ₹{car.price.toLocaleString("en-IN")}</p>
      <Link to="/cars">Back to Cars</Link>
    </div>
  );
}

export default CarDetails;
