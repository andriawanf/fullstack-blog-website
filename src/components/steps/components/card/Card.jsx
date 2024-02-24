import styles from './card.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={`${styles.cardContainer}`}>
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={`${styles.card} bg-white-500/5 border border-white-500/15 backdrop-blur-2xl text-white-500 shadow-xl shadow-white-500/5`}
            >
                <div className="flex items-center justify-between w-full">
                    <div className="space-y-3">
                        <h2 className='text-5xl font-bold font-dm'>{title}</h2>
                        <p className='text-lg font-nunito font-normal leading-6 max-w-lg text-white-700'>{description}</p>
                    </div>

                    <div className={styles.imageContainer}>
                        <motion.div
                            className="w-[450px]"
                            style={{ scale: imageScale }}
                        >
                            <img
                                fill
                                src={`${src}`}
                                alt="image"
                                className='object-cover overflow-hidden'
                            />
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default Card