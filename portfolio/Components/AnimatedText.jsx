import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";


const TextVariants = {
    offscreen: {
        width: 0,
        opacity: 0
    },
    onscreen: {
        width: "auto",
        opacity: 1
    },
    exit: {
        width: 0,
        opacity: 0
    }
};

export default function FramerHeadline() {
    const texts = [ "a DESIGNER", "an ARTIST","a CODER"];
    const [currentWord, setCurrentWord] = useState(-1);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i === texts.length) clearInterval(interval);
            else setCurrentWord(i);
            i++;
        }, 2100 + texts[i].length * 0.25);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.span
            className="animated-headline text-[30px] font-light text-white font-thin font-Poppins"
            transition={{ staggerChildren: 2 }}
        >
            {texts.map((word, index) =>
                index === currentWord ? (
                    <motion.span key={index} className="flex items-center justify-between">
                        {word.split("").map((r, id) => (
                            <motion.span
                                initial="offscreen"
                                animate="onscreen"
                                exit="exit"
                                variants={TextVariants}
                                transition={{
                                    duration: 1,
                                    delay: id * 0.05
                                }}
                                key={id}
                                className="m-1"
                            >
                                {r}
                            </motion.span>
                        ))}
                        <span className="ml-3">
                            {index == 0 ? <MdSpaceDashboard />: index == 1 ? <FaPaintBrush />  : <FaCode />}
                        </span>
                    </motion.span>
                ) : null
            )}
        </motion.span>
    );
}
