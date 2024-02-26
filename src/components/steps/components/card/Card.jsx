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
        <div ref={container} className={`${styles.cardContainer} top-[50%] md:top-[63%] lg:top-[30%] xl:top-[44%]`}>
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={`${styles.card} bg-white-500/5 border border-white-500/15 backdrop-blur-2xl text-white-500 shadow-xl shadow-white-500/5`}
            >
                <div className="flex flex-col items-center justify-between w-full lg:flex-row">
                    <div className="space-y-2 pt-11 lg:space-y-3 lg:pt-0">
                        <h2 className='text-3xl font-bold lg:text-4xl xl:text-5xl font-dm'>{title}</h2>
                        <p className='max-w-sm text-base font-normal leading-[110%] lg:max-w-lg lg:text-lg font-nunito text-white-700'>{description}</p>
                    </div>

                    <div className={styles.imageContainer}>
                        <motion.div
                            className="w-full xl:w-[450px]"
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