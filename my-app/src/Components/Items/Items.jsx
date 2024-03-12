import { Link } from "react-router-dom";
import "./Items.css";

function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-old-prices">${props.old_price}</div>
        <div className="items-new-prices">${props.new_price}</div>
      </div>
    </div>
  );
}
export default Item;
