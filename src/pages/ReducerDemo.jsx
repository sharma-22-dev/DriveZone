import { useReducer, useState } from "react";

const initialCars = [
  { id: 1, name: "Tata Nexon" },
  { id: 2, name: "Hyundai Creta" },
];

function carReducer(state, action) {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.payload];

    case "DELETE_CAR":
      return state.filter((car) => car.id !== action.payload);

    default:
      return state;
  }
}

function ReducerDemo() {
  const [cars, dispatch] = useReducer(carReducer, initialCars);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    dispatch({
      type: "ADD_CAR",
      payload: {
        id: Date.now(),
        name: name.trim(),
      },
    });

    setName("");
  }

  return (
    <div className="container">
      <h1>Car Inventory - useReducer Demo</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter car name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Add Car</button>
      </form>

      {cars.length === 0 ? (
        <p>No cars available.</p>
      ) : (
        <div className="car-list">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <h3>{car.name}</h3>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_CAR",
                    payload: car.id,
                  })
                }
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReducerDemo;
