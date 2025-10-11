import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimatedWords = ({ text }: { text: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: {
      y: "1.2em",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            marginRight: "0.25em",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
