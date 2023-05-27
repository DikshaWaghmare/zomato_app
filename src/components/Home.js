import img1 from '../assest/Images/burger.webp';
import img2 from '../assest/Images/misalpav.jpg';
import img3 from '../assest/Images/food.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Data from "./Data";
import MenuCards from "./MenuCards";
import Buttons from "./filterButtons";
function Home() {
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
            <Navbar />

            <div className='container mt-3'>
                <div id="carouselExampleCaptions" class="carousel slide" style={{ height: "450px", borderRadius: "10px" }}>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" >
                            <img src={img1} style={{ height: "450px", borderRadius: "10px" }} class="d-block w-100" alt="burger" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} style={{ height: "450px", borderRadius: "10px" }} class="d-block w-100" alt="misal pao" />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} style={{ height: "450px", borderRadius: "10px" }} class="d-block w-100" alt="pizza" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container mt-4 text-center">
                <div className="p-3">
                    <h3>Get Special Food</h3>
                </div>
                <div className="d-flex flex-wrap my-3 justify-content-evenly">

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gOKdn0H4KgpjR1nZbxJTIWcZdY0UDx6A_w&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEzKa5-Twwj5YnwUAkc1ITHF1S0jt9YKoWg&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx-DGSjLce3wg5PYOuTeqY_B6REVPvOYL9A&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>
                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gOKdn0H4KgpjR1nZbxJTIWcZdY0UDx6A_w&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEzKa5-Twwj5YnwUAkc1ITHF1S0jt9YKoWg&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx-DGSjLce3wg5PYOuTeqY_B6REVPvOYL9A&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>
                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEzKa5-Twwj5YnwUAkc1ITHF1S0jt9YKoWg&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>

                    <div className=" border border-1 border-dark rounded-4 "
                        style={{ height: "350px", width: "300px", backgroundImage: "linear-gradient(to bottom right, rgb(549, 249, 141), rgb(169, 245, 236))" }}>
                        <div className="text-center ">
                            <div className="pe-2 mt-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx-DGSjLce3wg5PYOuTeqY_B6REVPvOYL9A&usqp=CAU" height="200px" width="200px" className="rounded-4" alt="..." />
                                <h5 className="mt-3 text-center text-dark fw-bold">Special Breakfast</h5>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-outline-primary'><Link to="/orderdata" style={{ textDecoration: "none" }}>Order Now</Link></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid" id="order">
                <div className="row">
                    <h1 className="col-12 text-center mb-3 mt-3 fw-bold">Order Now🍩</h1>
                    <div className="text-end my-3 me-5">
                        <button className="me-5"><Link type="but" to="/menuTable" className="text-black " style={{ textDecoration: "None" }}>Menu Table</Link></button>

                        <button className="me-5"><Link type="but" to="#" className="text-black" style={{ textDecoration: "None" }}>Back</Link></button>

                    </div>

                    <Buttons filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
                    <MenuCards item={item} />

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;