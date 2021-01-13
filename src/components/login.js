import Navbar from './navbar';
import Footer from './footer';
import '../App.css';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const Login = () => {
    return (
        <div className="Layout">
        <Navbar></Navbar>
        <div className="dropown-menu">
            <form className="px-4 py-3">
                <div className="mb-3">
                    <label for="exampleDropdownFormEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email@example.com"></input>
                </div>

                <div className="mb-3">
                    <label for="exampleDropdownFormPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"></input>
                </div>

                <div className="mb-3">
                    <div className="form-ceheck">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                        <label className="form-check-label" for="dropdownCheck">Remember Me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>

            <div className="dropdown-divider"></div>

            <a className="dropdown-item">New around here? <Link to="./Register">Sign up</Link></a>

            <a className="dropdown-item"><Link to="./">Forgot password?</Link></a>
        </div>
        <Footer></Footer>
        </div>
    )
}

export {Login}