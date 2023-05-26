import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Data from "./Data";
const OrderData2 = () => {
    const [item, setItem] = useState(Data);
    useEffect(() => {
        async function viewOrderData() {
            try {
                setItem(Data);
            }
            catch (error) {
                console.log(error);
            }
        }
        viewOrderData();
    }, [])
    let viewData = item.map(obj => <tr key={obj.id}><td>{obj.id}</td><td>{obj.title}</td><td>{obj.category}</td><td>{obj.price}</td><td>{obj.Location}</td><td>{obj.Rating}</td></tr>)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="col-12 text-center my-3 fw-bold">Order Data</h1>
                    <hr></hr>
                    <div className="text-end my-3 me-5">
                        <button><Link type="but" to="/orderdata" className="text-black" style={{ textDecoration: "None" }}>Back</Link></button>
                    </div>
                    <table className=" table mx-auto border border-dark  bg-light shadow-sm" style={{ width: "50%" }}>
                        <thead className="table ">
                            <tr className="text-center border border-dark shadow">
                                <th>Id</th>
                                <th>title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {viewData}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default OrderData2;