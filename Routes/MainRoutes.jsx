import { Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import App from "../App";
import { Home } from "../components/Home";
import { Products } from "../components/ProductsDashboard";
import { SingleProductList } from "../components/SingleProduct";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProductList />} />
        </Route>
      </Routes>
    </>
  );
};
