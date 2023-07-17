import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const headerVariants = {
  initial: {
    opacity:0 ,
    y: "-100%"
  },
  animate:{
    opacity:1,
    y: 0,
    transition:{
      delay:0.2,
      type:'spring',
      stiffness:"300"
    }
  }
};

const Header = () => {
  return (
    <div>
      <motion.div
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <Link to="/">
          <div className="flex items-center px-10">
            <svg height="100" width="100">
              <circle
                cx="40"
                cy="40"
                r="30"
                stroke="white"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
            <h1>Heading</h1>
          </div>
        </Link>
      </motion.div>
      <div className="w-full border-b-4 border-black"></div>
      <div className="flex w-full justify-center items-center "></div>
    </div>
  );
};

export default Header;
