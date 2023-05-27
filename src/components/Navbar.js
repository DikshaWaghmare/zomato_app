
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Zomato🍕</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex row" id="navbarSupportedContent">
                        <div className="col-4">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item" ><a className="nav-link" href="#order"> Order Now</a></li>
                                
                            </ul>
                        </div>
                        <div className="col-4 px-5">
                            <form className="d-flex " role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className=' col-4 collapse navbar-collapse ps-2 p-1' id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mx-auto fw-normal fs-5">
                                <li className="nav-item" style={{ marginRight: "30px"}}><a className="nav-link" href="#"><i className="bi bi-box-arrow-in-right"></i> Sign In</a></li>
                                <li className="nav-item"><a  className="nav-link" href="#"><i className="bi bi-person"></i>Signup</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
export default Navbar;