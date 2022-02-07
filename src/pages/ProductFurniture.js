import React, { Component } from 'react';

class ProductFurniture extends Component {
  render() {
      const data = this.props.data;
    return (

        <>
            <div className='p-2 cardFurniture d-flex justify-content-center align-items-center'>
                <img className='w-100 rounded-1 imgCard' src={data.furnitureImg}></img>
                <h3>{data.name}</h3>
                <p>{data.price}</p>
            </div>
        </>
    )
    
  }
}
export default ProductFurniture;