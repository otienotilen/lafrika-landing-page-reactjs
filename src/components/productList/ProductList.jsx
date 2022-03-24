import "./productList.css";
import { Row, Col } from 'antd';
import a from "../../img/socialmediaadvertising.png";
import b from "../../img/googleads.png";
import c from "../../img/contentcreation.jpg";
import d from "../../img/leadgeneration.jpg";
import e from "../../img/facebook.png";
import f from "../../img/instagram.webp";
import g from "../../img/tiktok.jpg";
import h from "../../img/youtube_003.jpg";
import i from "../../img/googleseo.jpg";

const items = [
  {
    key: '1',
    icon: <i><img src={a} alt="" className="img" /></i>,
    title: 'Social media advertising',
    content: 'We craft engaging fecebook and instagram marketing campaigns.',
  },
  {
    key: '2',
    icon: <i><img src={b} alt="" className="img" /></i>,
    title: 'Google ads',
    content: 'One of the most effective ways to get traffic for your website.',
  },
  {
    key: '3',
    icon: <i><img src={c} alt="" className="img" /></i>,
    title: 'Content creation',
    content: 'The quality of your content dictates the power of your message.',
  },
  {
    key: '4',
    icon: <i><img src={d} alt="" className="img" /></i>,
    title: 'Lead generation',
    content: 'Leads are the lifeline of every business. We help you generate and qualify leads for optimum conversions.',
  },
]

const items2 = [
  {
    key: '1',
    icon: <i><img src={e} alt="" className="img" /></i>,
    title: 'Facebook',
    
  },
  {
    key: '2',
    icon: <i><img src={f} alt="" className="img" /></i>,
    title: 'Instagram',
    
  },
  {
    key: '3',
    icon: <i><img src={g} alt="" className="img" /></i>,
    title: 'Tiktok',
    
  },
  {
    key: '4',
    icon: <i><img src={h} alt="" className="img" /></i>,
    title: 'Youtube',
    
  },
   {
    key: '5',
    icon: <i><img src={i} alt="" className="img" /></i>,
    title: 'Google SEO',
    
  },
]

const ProductList = () => {
  return (
    <div id="ourservices" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Our Services</h1>
        <p className="pl-desc">
          As your sales partner, we focus solely on maximizing
          ROI. We use relevant platforms to target your
          customer on daily basis.
          Offering a range of digital services all of which are 
          focused on growing your business.
        </p>
      </div>
      
         <Row className="info" gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        <div>
         <h1 className="pl-title">Our Marketing Platforms</h1>
         <Row className="info" gutter={[16, 16]}>   
          {items2.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  
                </div>
              </Col>
            );
          })}
        </Row>
         </div>
    </div>
  );
};

export default ProductList;
