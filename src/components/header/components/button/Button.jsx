import { motion } from 'framer-motion';
import styles from './button.module.scss';

export default function Button({isActive, toggleMenu}) {
  return (
    <div className={`${styles.button} font-nunito text-white-500 border-t border-l rounded-full  bg-black-500 border-white-500/10 backdrop-blur-xl`}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Menu"/>
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label="Close" />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({label}) {
    return (    
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}