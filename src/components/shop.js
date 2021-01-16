import Navbar from './navbar';
import Footer from './footer';
import '../App.css';
import '../css/shop.css';
import Image1 from './image/img_forest.jpg';
import Image2 from './image/img_mountains.jpg';
import Image3 from './image/img_snow.jpg';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const shop = () => {
    return (
        <div className="layout">
            <Navbar></Navbar>
            <div className="row">
                <div className="col align-self-end">
                    <div className="dropdown">
                        <button className="dropbtn btn btn-light"><b>FEATURED</b></button>
                        <div className="dropdown-content"> 
                            <div >CATEGORY1</div>
                            <div >CATEGORY2</div>
                            <div >CATEGORY3</div>
                            <div >CATEGORY4</div>
                            <div >CATEGORY5</div>
                        </div>
                    </div>
                </div>

                
                <div className="col-8" style={{marginLeft:"20px"}}>
                
                    <div className="gambar">
                        <div className="d-flex justify-content-center">
                        <div className="row">
                            <div className="column">
                                <Link to="./product">
                                <img style={{width:"100%"}} src={Image1}></img>
                                <div className="bottom-left">
                                    <b>Baju</b><br></br>
                                        Pakaian
                                </div>
                                </Link>
                            </div>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image2}></img>
                                <div className="bottom-left">
                                    <b>Celana</b><br></br>
                                        Pakaian
                                </div>
                            </div>
                            </Link>


                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image3}></img>
                                <div className="bottom-left">
                                    <b>Kacamata</b><br></br>
                                        Fashion
                                </div>
                            </div>
                            </Link>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image1}></img>
                                <div className="bottom-left">
                                     <b>Gelang</b><br></br>
                                        Fasjion
                                </div>
                            </div>
                            </Link>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image2}></img>
                                <div className="bottom-left">
                                    <b>Baju</b><br></br>
                                        Pakaian
                                </div>
                            </div>
                            </Link>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image3}></img>
                                <div className="bottom-left">
                                    <b>Laptop</b><br></br>
                                        Elektronik
                                </div>
                            </div>
                            </Link>
                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image1}></img>
                                <div className="bottom-left">
                                    <b>Smartphone</b><br></br>
                                        Handphone
                                </div>
                            </div>
                            </Link>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image2}></img>
                                <div className="bottom-left">
                                    <b>Jacket</b><br></br>
                                        Pakaian
                                </div>
                            </div>
                            </Link>

                            <div className="column">
                                <img style={{width:"100%"}} src={Image3}></img>
                                <div className="bottom-left">
                                    <b>Celana Training</b><br></br>
                                        Pakaian
                                </div>
                            </div>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image1}></img>
                                <div className="bottom-left">
                                    <b>Kacamata Minus</b><br></br>
                                        Fashion
                                </div>
                            </div>
                            </Link>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image2}></img>
                                <div className="bottom-left">
                                    <b>Baju Anak</b><br></br>
                                        Pakaian
                                </div>
                            </div>
                            </Link>

                            <Link to="./product">
                            <div className="column">
                                <img style={{width:"100%"}} src={Image3}></img>
                                <div className="bottom-left">
                                    <b>Celana Pendek</b><br></br>
                                        Pakaian
                                </div>
                            </div>
                            </Link>

                        </div>
                    </div>
                    </div>
                </div>
                
            
                <div className="col">
                    <div className="dropdown">
                        <button className="dropbtn btn btn-light"><b>FILTER</b></button>
                        <div className="dropdown-content"> 
                            <div>FILTER1</div>
                            <div>FILTER2</div>
                            <div>FILTER3</div>
                            <div>FILTER4</div>
                            <div>FILTER5</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page item"><a className="page-link" href="#">1</a></li>
                        <li className="page item"><a className="page-link" href="#">2</a></li>
                        <li className="page item"><a className="page-link" href="#">3</a></li>
                        <li className="page item"><a className="page-link" href="#">4</a></li>
                        <li className="page item"><a className="page-link" href="#">5</a></li>
                        <li className="page item"><a className="page-link" href="#">6</a></li>
                        <li className="page item"><a className="page-link" href="#">7</a></li>
                        <li className="page item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

            <Footer></Footer>
        </div>
    )
}

export {shop}