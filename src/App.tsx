import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import orangeJuice from './assets/orangeJuiceBottle.png'
import healthyLife from './assets/healthyLifestyle.png'
import organicFruit from './assets/organic-farming.png'
import Accordion from "./components/Accordion"
import ContextProvider from "./context/Context"

function App() {
  
  return (
    <>
    <ContextProvider>
      <section id='sectionOne'>
        <Header/>
        <div className="main">
          <div className="aside">
            <h1>Natural.</h1>
            <strong>A brand made for you. <br />
            Created to offer your body only natural <br />vitamins from fresh fruits.
            </strong>
            <p>Take avantage of the benefits provided by our organic fruit juices</p>
            <button id='btnShop'>Shop now</button>
          </div>

          <div className="imageContainer">
            <img src={orangeJuice} alt="orange juice"/>
            <div className="ellipse"></div>
          </div>

        </div>
        
        <div id="last">
            <hr />
            <h1 id="title">Healthy & Fresh drinks</h1>
        </div>
        
      </section>

      <section id="sectionTwo">
        <div className="shopContainer">
          <ProductCard />
        </div>
      </section>

      <section id="sectionThree">
      <h1 id="title">Natural drinks for a healthy life</h1>
        <div className="infoContainer">
          <img src={healthyLife} alt="a women and a man running" />
          <div className="infoContent">
            <p>Full of vitamins our drinks contains no sugar, preservatives or artificial <br />additives beacuse all our juices are precisely controled in our farms. <br /> We make sure to get you only the best quality juices. </p>
          </div>
        </div>
        <div className="infoContainer">
          <div className="infoContent" id="second">
            <p>Our fruits are grown at our organic farms and picked at the perfect time for you to enjoy their original flavor. We plant, harvest, process, pack and ship with extreme care for the environment.</p>
          </div>
          <img id="right" src={organicFruit} alt="man eating a watermelon" />
        </div>

      </section>
      <section id="sectionFour">
        <div className="banner">
          <h1>FAQ</h1>
        </div>
        <Accordion/>
        <footer>
          <div className="wrapper">
            <div className="contact">
              <h1>Natural.</h1>
              <div className="iconContainer">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              </div>
              <p>Email: Naturalshop@contact.com</p>
              <p>561-213-4245</p>
            </div>

            <div className="shopInfo">
              <h2>Shop</h2>
              <p><a href="#last">All collections</a></p>
              <p>Winter Drinks</p>
              <p>Discount</p>
            </div>

            <div className="companyInfo">
              <h2>Company</h2>
              <p><a href="#sectionThree">About Us</a></p>
              <p>Contact</p>
              <p>Affiliates</p>
            </div>

            <div className="supportInfo">
              <h2>Support</h2>
              <p><a href="#sectionFour">FAQs</a></p>
              <p>Cookie policy</p>
              <p>Terms of use</p>
            </div>
            
            <div className="paymentContainer">
              <h2>Payment methods</h2>
              <div className="iconContainer">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-paypal"></i>
              </div>
            </div>

          </div>
          <p id="footerText">©Copyright Natural. 2023 - All terms reserved</p>
        </footer>
      </section>
    </ContextProvider>
    </>
  )
}

export default App
