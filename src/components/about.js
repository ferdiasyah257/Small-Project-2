import Navbar from './navbar';
import Footer from './footer';
import '../App.css';
import '../css/home.css';

  const About = () => {
      return (
          <div className="Layout">
              <Navbar></Navbar>
              <div style={{textAlign:"center", marginBottom:"500px"}}>Cilsy Fashionluton merupakan sebuah startup yang bergerak di bidang penjualan fashion kepada customer. </div>
                <Footer></Footer>
          </div>
      )
  }

  export {About}