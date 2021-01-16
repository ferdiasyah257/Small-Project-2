import React, { useState, useEffect } from 'react';
import useRouter from 'use-react-router'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../App.css';
import '../css/product.css';
import Panah from './image/triangle.svg'
import primeImage from "./image/4842 1.png";
import primeImage2 from "./image/download (2).jpg";
import primeImage3 from "./image/download (3).jpg";
import primeImage4 from "./image/download.jpg";
import qs from 'query-string';


const Buy = ({counter, products}) => {
    const [productIndex, setProductIndex] = useState(0);
    const {location} = useRouter()
    console.log(location)
    useEffect(() => {
        const objSearch = qs.parse(location.search)

        if (objSearch.id > 3 || objSearch.id < 0){
            setProductIndex(0)
        } else {
            setProductIndex(objSearch.id)
        }
    }, [location.search])

    return(
        <div className="Layout">
        
            <p style={{fontSize:"30px"}}>{products[productIndex].productColor}</p>
            <p style={{fontSize:"30px"}}> <b>{products[productIndex].productTitle}</b></p>
          <br></br>
            <p><span style={{fontSize:"20px"}}>${products[productIndex].productPrice}</span><br></br><del>{products[productIndex].productDiscount}</del></p>
            <p>{products[productIndex].productName}</p>
            <p>{products[productIndex].productDescription}</p>
            <p>Jumlah : {counter}</p>
        <Link to="./"><button className="btn btn-dark">Home</button></Link>{" "}
        <Link to="./product"><button className="btn btn-primary">Back</button></Link>
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

export default connect(mapStateToProps)(Buy)