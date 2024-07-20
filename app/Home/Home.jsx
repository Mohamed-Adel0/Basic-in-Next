import axios from "axios";
import Link from "next/link";
import React from "react";

const Homee = async () => {
  const response = await axios.get(
    `https://apis-8gnd.onrender.com/allproducts`
  );
  const getProducts = response.data.data;
  return (
    <div>
      <div className="parent-home">
        <div className="container-home">
          {getProducts?.map((e, index) => (
            <div className="card-home" key={index}>
              <img src={`https://apis-8gnd.onrender.com/${e.image}`} alt="" />
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <Link href={`/Home/${e._id}`}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homee;
