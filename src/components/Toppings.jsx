import { Link } from "react-router-dom";


const Toppings = () => {
  return (
    <div className="center">
      <h2>This is Toppings</h2>
      <ul>
        <li>HIGH</li>
        <li>MEDIUM</li>
        <li>LOW</li>
      </ul>
      <Link to="/order"><button>Order now</button></Link>
    </div>
  );
};

export default Toppings;