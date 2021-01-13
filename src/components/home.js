import Navbar from './navbar';
import Footer from './footer';
import '../App.css';
import '../css/home.css';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import Image1 from './image/img_forest.jpg';
import Image2 from './image/img_mountains.jpg';
import Image3 from './image/img_snow.jpg';


const home = () => {
    
    return (
        <div className="layout">
        <Navbar></Navbar>
        <div></div>
        <div className="text1">Choose <b>as you want</b> <br></br>
            Pay <b> as you can</b>
        </div>

        <div className="row">
            <div className="col" >
                <button className="btn btn-dark" style={{marginLeft: "100px"}}>
                <Link to="./shop">
                <span className="tombol" >Shop Now</span>
                </Link>
                </button>
            </div>

            <div className="col">
                <div className="text"><b>New Concept</b> of Online Shopping</div>
            </div>
        </div>
        <div className="row">
            <div className="col">

            </div>

            <div className="col">
                <div className="text2">
                    Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go here.
                </div>
            </div>
            
            <div className="gambar">
                <div className="row">
                    <div className="col">
                        
                    </div>

                    <div className="col-sm-12">
                    <div className="column" >
                        <img style={{width:"100%"}} src={Image1}></img>
                        <div className="bottom-right">
                            <b>KEYNOTE</b><br></br>
                                SUBTITLE
                        </div>
                    </div>
                    
                    <div className="column" >
                        <img style={{width:"100%"}} src={Image2}></img>
                        <div className="bottom-right">
                            <b>ACTIVITIES</b><br></br>
                                SUBTITLE
                        </div>
                    </div>

                    <div className="column" >
                        <img style={{width:"100%"}} src={Image3}></img>
                        <div className="bottom-right">
                            <b>GALLERY</b><br></br>
                            SUBTITLE
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer></Footer>
        </div>

    )
    
}

export {home}