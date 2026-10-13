import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavourite } from "../store/favouritesSlice";

const carList = [
  {
    id: 1,
    name: "Tata Nexon",
    brand: "Tata",
    price: 900000,
    type: "SUV",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    brand: "Hyundai",
    price: 1200000,
    type: "SUV",
  },
  {
    id: 3,
    name: "Maruti Swift",
    brand: "Maruti",
    price: 650000,
    type: "Hatchback",
  },
  {
    id: 4,
    name: "Honda City",
    brand: "Honda",
    price: 1200000,
    type: "Sedan",
  },
  {
    id: 5,
    name: "Mahindra Thar",
    brand: "Mahindra",
    price: 1500000,
    type: "SUV",
  },
  {
    id: 6,
    name: "Toyota Innova",
    brand: "Toyota",
    price: 1900000,
    type: "MUV",
  },
];

function Cars() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const searchInputRef = useRef(null);

  const dispatch = useDispatch();

  const filteredCars = carList.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase());

    const matchesType = type === "All" || car.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div className="container">
      <h1>Our Cars</h1>
      <p>Explore our collection and choose your favourite car.</p>

      <input
        type="text"
        placeholder="Search by car name or brand"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="All">All Types</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Hatchback">Hatchback</option>
        <option value="MUV">MUV</option>
      </select>

      <div className="car-list">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div className="car-card" key={car.id}>
              <h3>{car.name}</h3>

              <p>Brand: {car.brand}</p>
              <p>Type: {car.type}</p>
              <p>Price: ₹{car.price.toLocaleString("en-IN")}</p>

              <Link to={`/cars/${car.id}`}>View Details</Link>

              <br />

              <button onClick={() => dispatch(addFavourite(car))}>
                Add to Favourites
              </button>
            </div>
          ))
        ) : (
          <p>No cars found.</p>
        )}
      </div>
    </div>
  );
}

export default Cars;
