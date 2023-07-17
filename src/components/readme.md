      <motion.div
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >


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
      type:'spring',     // type:"tween"
      stiffness:"300"   
    }
  }
};


    transition: {
      repeatType: "mirror",
      repeat: 5,
    }


    