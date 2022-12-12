import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/navbar.css";
import { About } from "./components/about";
import { Home } from "./components/home";
import Navbar from "./components/navbar";
import NotFound from "./components/not-found";
import OrderSummary from "./components/order-summary";
import Products from "./components/products";
import { FeaturedProducts } from "./components/featured-products";
import { New } from "./components/new";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
