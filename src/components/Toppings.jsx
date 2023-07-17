import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 12,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay:0.2,
      mass: 1,
      damping: 12,
    },
  },
};

const hoverAnimation = {
  hover: { scale: 1.3, originX: 0 },
};

const buttonAnimation={
  hover:{
    scale:1.2,
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
    transition: {
      repeatType: "mirror",
      repeat: 5,
    }
  }
}

const Toppings = () => {
  return (
    <div className="center">
      <motion.h2 variants={parentVariants} initial="hidden" animate="visible">
        This is Toppings
        <motion.h3 variants={childVariants} className="mt-4 text-black">
          Set Your Spicy Level
        </motion.h3>
      </motion.h2>
      <ul>
        <motion.li variants={hoverAnimation} whileHover="hover">
          {" "}
          HIGH
        </motion.li>
        <motion.li variants={hoverAnimation} whileHover="hover">
          {" "}
          MEDIUM
        </motion.li>
        <motion.li variants={hoverAnimation} whileHover="hover">
          {" "}
          LOW
        </motion.li>
      </ul>
      <motion.button
        variants={buttonAnimation}
        whileHover="hover"
      >
        <Link to="/order">Order now</Link>
      </motion.button>
    </div>
  );
};

export default Toppings;
