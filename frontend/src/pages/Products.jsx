import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import "./Products.css";

function Products() {

  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
      fetchProducts();
  },[]);

  const fetchProducts=async()=>{

      try{

          const res=await api.get("/products");

          setProducts(res.data.products);

      }catch(err){

          console.log(err);

      }

  };

  const filteredProducts=products.filter(product=>

      product.name.toLowerCase().includes(search.toLowerCase())

  );

  return(
    <>

      <Navbar/>

      <section className="hero">

        <h1>🌾 AgriMind Marketplace</h1>

        <p>

          Buy fresh agricultural products directly from trusted farmers across Nigeria.

        </p>

      </section>

      <section className="products-section">

        <div className="products-header">

            <h2>Available Products</h2>

            <input
                className="search-box"
                placeholder="Search products..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />

        </div>

        <div className="products-grid">

            {filteredProducts.map(product=>(

                <ProductCard
                    key={product.id}
                    product={product}
                />

            ))}

        </div>

      </section>

      <Footer/>

    </>
  );

}

export default Products;