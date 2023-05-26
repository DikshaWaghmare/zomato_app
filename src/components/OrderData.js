import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Data from "./Data";
import MenuCards from "./MenuCards";
import Buttons from "./filterButtons";

const OrderData1 = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (categoryData) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === categoryData;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center mb-3 mt-3 fw-bold">Order Now🍩</h1>
          <div className="text-end my-3 me-5">
            <button className="me-5"><Link type="but" to="/menuTable" className="text-black " style={{ textDecoration: "None" }}>Menu Table</Link></button>

            <button className="me-5"><Link type="but" to="/" className="text-black" style={{ textDecoration: "None" }}>Back</Link></button>

          </div>

          <Buttons filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
          <MenuCards item={item} />

        </div>
      </div>
    </>
  );
};


export default OrderData1;