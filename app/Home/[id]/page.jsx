import axios from "axios";
import Link from "next/link";
import React from "react";

const Data = async ({ params }) => {
  let id = params.id;
  const response = await axios.get(`https://apis-8gnd.onrender.com/allproducts/${id}`);
  const getProducts = response.data.data;
  return (
    <div>
      <div className="singalProduct">
        <div className="card">
          <img src={`https://apis-8gnd.onrender.com/${getProducts.image}`} alt="" />
          <h2>{getProducts.title}</h2>
          <p>{getProducts.description}</p>
          <Link href="/">Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Data;
