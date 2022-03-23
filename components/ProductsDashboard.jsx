import axios from "axios";
import { Navbar } from "./Navbar";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
export const Products = () => {
  // to get all products list on component mounts
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getproductsData = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://movie-fake-server.herokuapp.com/products",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    //dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    getproductsData();
  }, []);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <Navbar />
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {loading && <h2>Loading....</h2>}
        {!loading &&
          data &&
          data.map((item) => {
            return (
              <div className="product">
                <Link key={item.id} to={`/products/${item.id}`}>
                  {"Product Name:" + item.brand}
                </Link>
                <img src={item.image} />
                {<br />}
                <Link key={item.title} to={`/products/${item.category}`}>
                  {"Product Price: " + item.price}
                </Link>
              </div>
            );
          })}
      </div>
      <Outlet />
    </>
  );
};
