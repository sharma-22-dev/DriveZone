import { useState, useEffect } from "react";

function useCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=6",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        const carData = [
          { id: 1, name: "Tata Nexon", brand: "Tata", price: 900000 },
          { id: 2, name: "Hyundai Creta", brand: "Hyundai", price: 1200000 },
          { id: 3, name: "Maruti Swift", brand: "Maruti", price: 650000 },
          { id: 4, name: "Honda City", brand: "Honda", price: 1200000 },
          { id: 5, name: "Mahindra Thar", brand: "Mahindra", price: 1500000 },
          { id: 6, name: "Toyota Innova", brand: "Toyota", price: 1900000 },
        ];

        if (data.length > 0) {
          setCars(carData);
        }
      } catch {
        setError("Unable to load car data.");
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return { cars, loading, error };
}

export default useCars;
