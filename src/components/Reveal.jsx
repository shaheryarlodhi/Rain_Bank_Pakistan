
import { motion } from 'motion/react';

export default function Reveal({
    children,
    className = '',
    direction = 'up',
    delay = 0,
    duration = 0.8,
    once = true,
}) {
    const directions = {
        up: { y: 45, x: 0 },
        down: { y: -45, x: 0 },
        left: { x: -55, y: 0 },
        right: { x: 55, y: 0 },
    };

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{
                once,
                amount: 0.2,
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
