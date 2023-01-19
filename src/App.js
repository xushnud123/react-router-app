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
import { Users } from "./components/users";
import { UserDetails } from "./components/user-details";
import { Admin } from "./components/admin";
import { Profile } from "./components/profile";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/login";
import { RequireAuth } from "./components/requireAuth";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
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
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route
            path='profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
