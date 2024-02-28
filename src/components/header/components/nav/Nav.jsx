import styles from './nav.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data.js';
import { perspective, slideIn } from "./anim.js";
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div className={`${styles.nav} font-nunito font-medium text-left`}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div
                                    href={href}
                                    custom={i}
                                    variants={slideIn}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <a href={href} className='text-white-500 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white-500 hover:transition hover:transform hover:ease-in-out hover:duration-150 hover:delay-150 hover:-translate-y-1'>
                                        {title}
                                    </a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div className={styles.footer}>
                {
                    footerLinks.map((link, i) => {
                        const { title, href, logo } = link;
                        return (
                            <motion.a
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                                className='text-white-500'
                            >
                                <i className={`${logo} pr-1.5`}></i>
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}