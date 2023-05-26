import React from "react";
const MenuCards = ({item}) => {
    return (
        <>
          <div className="container-fluid">
            <div className="d-flex row justify-content-evenly mx-3">
              {item.map((Val) => {
                return(
                  <div className="col-md-4 col-sm-6 card my-3 py-3 border border-0" style={{height:"450px", width:"450px"}} key={Val.id} >
                    <div className="card-img-top text-center ">
                      <img src={Val.img} alt={Val.title} className="rounded" style={{height:"250px", width:"320px"}}  />
                    </div>
                    <div className="card-body">
                      <div className="card-title ">
                        <div className="text-center fw-bold fs-5">
                            {Val.title}<br/>
                        </div>
                        <div className="px-4 d-flex row">
                            <div className="col-8 ps-4">
                                Category: {Val.category}<br/>
                                Price: {Val.price}<br/>
                                Location: {Val.Location}<br/>
                                Rating: {Val.Rating}
                            </div>
                            <div className="col-4 px-2 pt-4">
                                <button>Order Now</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    };
export default MenuCards;