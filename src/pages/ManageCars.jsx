import { useState } from "react";

function ManageCars() {
  const [cars, setCars] = useState([
    { id: 1, name: "Tata Nexon", brand: "Tata", price: 900000 },
    { id: 2, name: "Hyundai Creta", brand: "Hyundai", price: 1200000 },
    { id: 3, name: "Maruti Swift", brand: "Maruti", price: 650000 },
  ]);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
  });

  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.brand.trim() ||
      !form.price ||
      Number(form.price) <= 0
    ) {
      setError("Please enter valid details in all fields.");
      return;
    }

    if (editId !== null) {
      setCars(
        cars.map((car) =>
          car.id === editId
            ? { ...car, ...form, price: Number(form.price) }
            : car,
        ),
      );
      setEditId(null);
    } else {
      const newCar = {
        id: Date.now(),
        ...form,
        price: Number(form.price),
      };

      setCars([...cars, newCar]);
    }

    setForm({ name: "", brand: "", price: "" });
    setError("");
  }

  function handleEdit(car) {
    setForm({
      name: car.name,
      brand: car.brand,
      price: String(car.price),
    });

    setEditId(car.id);
    setError("");
  }

  function handleDelete(id) {
    setCars(cars.filter((car) => car.id !== id));

    if (editId === id) {
      setEditId(null);
      setForm({ name: "", brand: "", price: "" });
    }
  }

  return (
    <div className="container">
      <h1>Manage Cars</h1>
      <p>Add new cars or update and remove existing records.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Car Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter car name"
        />

        <label>Brand</label>
        <input
          name="brand"
          value={form.brand}
          onChange={handleChange}
          placeholder="Enter brand"
        />

        <label>Price (₹)</label>
        <input
          name="price"
          type="number"
          min="1"
          value={form.price}
          onChange={handleChange}
          placeholder="Enter price"
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">
          {editId !== null ? "Update Car" : "Add Car"}
        </button>

        {editId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({ name: "", brand: "", price: "" });
              setError("");
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <h2>Car Inventory</h2>

      {cars.length === 0 ? (
        <p>No cars available. Add a car using the form above.</p>
      ) : (
        <div className="car-list">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <h3>{car.name}</h3>
              <p>Brand: {car.brand}</p>
              <p>Price: ₹{car.price.toLocaleString("en-IN")}</p>

              <button onClick={() => handleEdit(car)}>Edit</button>

              <button onClick={() => handleDelete(car.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageCars;
 