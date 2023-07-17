import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants={
    hidden:{
        opacity:0,
        x:"100%"
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            delay:0.2,
            type:'spring',
            stiffness:120
        }
    }
}
const Home = () => {
    return (
        <div className="center">
            <motion.h2 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >This is my sweet home</motion.h2>
           <button> <Link to="/base">Go To Shop</Link></button>
        </div>
    );
};

export default Home;