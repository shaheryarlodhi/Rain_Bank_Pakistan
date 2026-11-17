
import { motion, useReducedMotion } from 'motion/react';

export default function Reveal({
    children,
    className = '',
    direction = 'up',
    delay = 0,
    duration = 0.7,
    once = true,
}) {
    const shouldReduceMotion = useReducedMotion();

    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: -35, y: 0 },
        right: { x: 35, y: 0 },
    };

    return (
        <motion.div
            className={className}
            initial={
                shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        ...directions[direction],
                    }
            }
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{
                once,
                amount: 0.1,
            }}
            transition={{
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
