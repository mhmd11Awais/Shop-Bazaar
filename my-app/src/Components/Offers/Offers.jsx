import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}
export default Offers;
