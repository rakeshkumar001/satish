const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 3,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};
const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        transition: {
            duration: 3,
            when: "afterChildren",
        },
    },
};
const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 2,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};
const logoConfig = {
    initial: {
        y: 40,
        x:"50vh",
    },
    animate: {
        y: 80,
        x:20,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
}
export { blackBox, text, textContainer,logoConfig }