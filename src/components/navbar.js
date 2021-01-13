import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import Pencarian from './image/search.svg';
import Keranjang from './image/shopping-cart.svg'
import '../css/navbar.css';

const navbar = () => {
    return (
    <nav className="navbar"> 
        <div className="container-fluid">
            <div style={{fontSize:"40px"}}><Link to="./"><span className="namaToko">F-Shop</span></Link></div>
            <div><Link to="./">Home</Link></div>
            <div><Link to="./shop">Product</Link></div>
            <div><Link to="./">About</Link></div>
            <div><Link to="./">Contact</Link></div>
            
            <form className="d-flex">
                <input className="form-control" type="search" placeholder="Search"></input>
                <img className="gambarPencarian" style={{width:'30px', height:'30px'}} src={Pencarian}></img>
                <img className="keranjang" src={Keranjang}></img>
                <Link to="./Login">
                    <div className="btn btn-light">Login</div>
                </Link>

                <Link to="./register">
                    <div className="btn btn-light">SignUp</div>
                </Link>
            </form>
        </div>
    </nav>
    )
}

export default navbar