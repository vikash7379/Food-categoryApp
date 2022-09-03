import React from 'react'

const FilterBtn = ({filterItem,catebtn}) => {
  return (
    <>
        <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
            {
                catebtn.map((curElem ,index) => {
                    return  <button id='btn1' className="btn  " key={index} onClick={() => filterItem(curElem)}>
                                {curElem}
                            </button>
                })
            }
        </div>
      </div>
    </>
  )
}

export default FilterBtn