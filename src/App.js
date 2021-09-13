
import './index.css';
import Div from './Div';
import Mid from './Mid';

function App() {
  return (
   <>
   <div className="heading" >
   <div className="bich">
   <img src="https://bio.fm/cdn/storage/Images/4SKLu3ZjBgwwZhGGe/original/4SKLu3ZjBgwwZhGGe.jpg"/>
   <h2>Lilly Sabri <button>Pro</button></h2>
   <h6>bio.fm/lillysabri</h6>
   </div>
   </div>
   <Div head ="THE LEAN APP IS COMING GUIDE!"
        data="SIGN UP NOW FOR FREE GUIDES!"
        link="https://mailchi.mp/leanwithlilly/freeworkouttimetable"/>
        <Mid/>
    <Div head ="Get my Cookbook!"
         data="BUY NOW"
         link="https://www.leanwithlilly.com/products/the-anti-inflammatory-cook-book/"/>
    <Div head ="SHOP GYMSHARK using my link!"
         data="BUY GORGEOUS GYM CLOTHING NOW!"
         link="https://uk.gymshark.com/collections/new-releases/womens?utm_source=ACA&utm_medium=3728830_Lilly+Sabri&utm_campaign=instagram&ranMID=45837&ranEAID=8hecCNwSw7c&ranSiteID=8hecCNwSw7c-8cRS7qxbLFDUizINZVbBlAbh"/>
    <Div head ="50% OFF my best selling 8 WEEK LEAN TRANSFORMATION GUIDE!"
         data="BUY NOW!"
         link="https://www.leanwithlilly.com/products/video-8-week-lean-transformation-guide"/>  
    <Div head ="LEAN RESISTANCE BANDS"
         data="SHOP NOW!"
         link="https://www.leanwithlilly.com/collections/resistance-bands/"/>  
   </>
  );
}

export default App;
