import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Services from "./pages/Services";
import TestDrive from "./pages/TestDrive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import ManageCars from "./pages/ManageCars";
import ApiDemo from "./pages/ApiDemo";
import ReducerDemo from "./pages/ReducerDemo";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/services" element={<Services />}>
          <Route path="test-drive" element={<TestDrive />} />
        </Route>
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manage-cars" element={<ManageCars />} />
        <Route path="/api-demo" element={<ApiDemo />} />
        <Route path="/reducer-demo" element={<ReducerDemo />} />
      </Routes>
    </>
  );
}

export default App;
