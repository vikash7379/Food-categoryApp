import React from 'react'

const MenuItems = (props) => {
  return (
    <div className="menu-items container-fluid mt-5">
        <div className="row ">
          <div className="col-11 mx-auto">
            <div className="row  ">
              {
                props.items.map((curElem) =>
                {
                const { id, image, name, category, price, description } = curElem;
                return (

                  <div className="item1 col-12 col-md-6 col-lg-4 col-xl-4 my-4 ">
                    <div className="row Item-inside ">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div my-4">
                        <img src={image} alt={name} className="img-fluid img" />
                      </div>
                      {/* menu description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-">
                          <h4>{name}</h4>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h5>{price}</h5>
                            <a href="#">
                              <button className="btn btn-menu">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>*Prices may very on selected date</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

  )
}

export default MenuItems