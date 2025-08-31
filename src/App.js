import CarouselsCard from './components/CarouselsCard';
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <CarouselsCard />
        <ProductDetails />
      </div>
    </div>
  );
}

export default App;

