import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../store/favouritesSlice";
import { Link } from "react-router-dom";

function Favourites() {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>My Favourite Cars</h1>

      {favourites.length === 0 ? (
        <p>You have not added any favourite cars yet.</p>
      ) : (
        <div className="car-list">
          {favourites.map((car) => (
            <div className="car-card" key={car.id}>
              <h3>{car.name}</h3>
              <p>Brand: {car.brand}</p>
              <p>Price: ₹{car.price.toLocaleString("en-IN")}</p>

              <Link to={`/cars/${car.id}`}>View Details</Link>

              <br />

              <button onClick={() => dispatch(removeFavourite(car.id))}>
                Remove Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
