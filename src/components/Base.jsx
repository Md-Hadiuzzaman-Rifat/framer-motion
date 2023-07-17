import { Link } from "react-router-dom";

const Base = () => {
  return (
    <div className="center">
      <h1>This is base</h1>
      <ul>
        <li>BRIRIYANI</li>
        <li>TEHARI</li>
        <li>KACCHI</li>
        <li>KHICHURI</li>
      </ul>
      <button>
        <Link to="/toppings">Toppings</Link>
      </button>
    </div>
  );
};

export default Base;
