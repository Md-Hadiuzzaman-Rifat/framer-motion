import { Link } from "react-router-dom";
import {motion} from "framer-motion"

// const animateVariants={
// }

const hoverAnimation={
  hover:{scale:1.3, originX: 0}
}

const Base = () => {
  return (
    <div className="center">
      <h1>This is base</h1>
      <ul>
        <motion.li 
          variants={hoverAnimation}
          whileHover="hover"
        >BRIRIYANI</motion.li>
        <motion.li 
          variants={hoverAnimation}
          whileHover="hover"
        >TEHARI</motion.li>
        <motion.li 
          variants={hoverAnimation}
          whileHover="hover"
        >KACCHI</motion.li>
        <motion.li 
          variants={hoverAnimation}
          whileHover="hover"
        >KHICHURI</motion.li>
      </ul>
      <button>
        <Link to="/toppings">Toppings</Link>
      </button>
    </div>
  );
};

export default Base;
