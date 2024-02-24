import { motion } from "framer-motion";

const Transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="fixed top-0 left-0 z-50 w-full h-screen origin-bottom bg-white-500"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
                className="fixed top-0 left-0 z-50 w-full h-screen origin-top bg-white-500"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default Transition;