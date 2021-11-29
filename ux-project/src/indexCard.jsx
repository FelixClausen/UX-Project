import './App.css';
import { BsArrowRightShort } from "react-icons/bs";

function IndexCard() {
  return (
    <div className="CardWrapper">
      {/* card/section container */}
      <div className="card bg-dark text-white">
        {/* text + btn container */}
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
          <button type="button" className="btn btn-outline-dark">Read more <BsArrowRightShort /></button>
        </div>
      </div>
      <div className="card bg-dark text-white">
        {/* text + btn container */}
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
          <button type="button" className="btn btn-outline-dark">Read more <BsArrowRightShort /></button>
        </div>
      </div>
      {/* a div to break the line (makes the cards go down after 2 cards / line) */}
      <div className="break"></div>
    </div>
  );
}

export default IndexCard;