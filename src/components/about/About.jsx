import "./about.css";
import Award from "../../img/succsess.jpg";
import People from "../../img/Capture2.PNG"

const About = () => {
  return (
    <div id="aboutus" className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
           src={People}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Us</h1>
        <p className="a-sub">
          Lafrika media is a marketing agency that is aimed at helping business
          achieve dominance in their industry which means more revenue, profits
          and ability to scale.
        </p>
        <p className="a-desc">
          How would you feel if you would consistently and predictably getting
          more new customers for your business. With our ruthless marketing 
          strategies, revenue-driven implementation and conversion process
          we give you the power to experience the feeling.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Success</h4>
            <p className="a-award-desc">
              We know success is more than just creating the
              right adverts. Its getting in the mind of your target
              market and implementing a full cold to hot journey 
              building massive brand visibility and expanding your
              community from a digital perspective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
