import img1 from '../assest/Images/noodles.jpg'
function Footer() {
    return (
        <>
            < footer className="text-black mt-5 mb-1 bg-light" style={{ }}>
                <div className="container">
                    <div className="container d-flex flex-wrap justify-content-evenly">
                        <div className="footer-style mt-3">
                            <a href="#"><img src={img1} style={{ height: "180px", width: "180px" }}
                                className="footer-img" /></a>
                        </div>
                        <div style={{ marginTop: "50px" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <h4 className="mb-4">Quick Contact</h4>
                                <li><span className="fs-5"><i className="bi bi-telephone"></i> -1234567890</span></li>
                                <li><span className="fs-5"><i className="bi bi-envelope"></i> -helloworld@gmail.com</span></li>
                                <li><span className="fs-5"><i className="bi bi-house"></i> -Bangalore, Karnataka</span></li>
                            </ul>
                        </div>
                        <div className="footer-style" style={{ marginTop: "50px" }}>
                            <ul style={{ listStyleType: "none" }}>
                                <h4 className="mb-4">Find us on....</h4>
                                <li><a href="https://www.flipkart.com" target="_blank" className="m-3 text-black fs-5"
                                    style={{ textDecoration: "none" }}>
                                    <i className="bi bi-cart"></i> Flipkart
                                </a></li>
                                <li> <a href="https://www.amazon.com" target="_blank" style={{ textDecoration: "none" }}
                                    className="m-3 text-black fs-5">
                                    <i className="fa-brands fa-amazon"></i> Amazon</a></li>
                                <li><a href="https://www.twitter.com" target="_blank" style={{ textDecoration: "none" }}
                                    className="m-3 text-black fs-5">
                                    <i className="fa-brands fa-square-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.Facebook.com" target="_blank" style={{ textDecoration: "none" }}
                                    className="m-3 text-black fs-5">
                                    <i className="bi bi-facebook"></i> Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}
export default Footer;