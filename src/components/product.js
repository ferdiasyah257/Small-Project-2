import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './navbar';
import Footer from './footer';
import '../App.css';
import '../css/product.css';
import Image from './image/4842 1.png'
import Panah from './image/triangle.svg'
import primeImage from "./image/4842 1.png";
import primeImage2 from "./image/download (2).jpg";
import primeImage3 from "./image/download (3).jpg";
import primeImage4 from "./image/download.jpg";


const Product = ({products, counter, tambahSatu, kurangSatu}) => {
    const [productIndex, setProductIndex] = useState(0);

    return (
        <div className="layout">
            <Navbar></Navbar>
            <div className="row">
                <div className="col">
                    <div className="text-right"><img src={
                  productIndex === 0
                    ? primeImage
                    : productIndex === 1
                    ? primeImage2
                    : productIndex === 2
                    ? primeImage3
                    : primeImage4
                }
                width="480px"
                height="450px"
                text-align="right"/></div>
                    <br></br>
                    <div className="row justify-content-center" style={{marginLeft:"90px"}}>
                         {productIndex !== 0 && (<div className="col-2 btn btn-light btn-outline-dark" onClick={() => setProductIndex(productIndex - 1)}>Previous</div>)}
                         {productIndex !== products.length - 1 && (<div className="col-2 btn btn-light btn-outline-dark" onClick={() => setProductIndex(productIndex + 1)}>Next</div>)}
                    </div>
                    <br></br>
                </div>

                <div className="col">
                    <p style={{fontSize:"30px"}}>{products[productIndex].productColor}</p>
                    <p style={{fontSize:"30px"}}> <b>{products[productIndex].productTitle}</b></p>
                    <br></br>
                    <p><span style={{fontSize:"20px"}}>${products[productIndex].productPrice}</span><br></br><del>{products[productIndex].productDiscount}</del></p>
                    <p>{products[productIndex].productName}</p>
                    <p>{products[productIndex].productDescription}</p>
                    
                    <div>Size :
                        <select style={{fontSize:"20px"}}>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                    <div className="text-right">Mens <br></br>
                    100% Cotton
                    </div>

                    <div >Tambah Item: <img src={Panah} className="panahKurang" onClick={() => kurangSatu()}></img> {counter} <img src={Panah} className="panahTambah" onClick={() => tambahSatu()}></img> 
                    </div>

                    <div className="btn btn-dark" style={{marginTop:"50px"}}>Buy Now</div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}

const mapStateToProps = (props) => {
    console.log("mapStateToProps", props)
    return {
        products: props.productReducer.products,
        counter: props.counter.total,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
      tambahSatu: () => dispatch({
        type: 'INC_COUNTER'
      }),

      kurangSatu: () => dispatch ({
          type: 'minSatu'
      }),

      addCart: (product) => dispatch({
        type: 'ADD_CART',
        product: product
      }),
    }
}
//export {product}

export default connect(mapStateToProps, mapDispatchtoProps)(Product);