const logoConfig = {
    initial: {
        y: 40,
        x: "50vh",
    },
    animate: {
        y: 80,
        x: 20,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
}
const pageTransition = {
    initial: {
        scaleY: 0
    },
    animate: {
        scaleY: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        scaleY: 0
    }
}
const glideDown = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 1,
            type: "spring", stiffness: 200,
        }
    },
    exit: {
        y: -100,
        opacity: 0
    }
}
const glideUp = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1,
            type: "spring", stiffness: 100,
        }
    },
    exit: {
        y: -100,
        opacity: 0
    }
}
const fadeinPopout = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}
const parentContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.3,
        }
    }
}

const childItems = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", stiffness: 200, duration: 0.2
        }
    },

}
const tickle = {
    initial: { rotate: 0 },
    transition: {
        rotate: [0, 15, 0, 15, 0],
        duration: 0.1
    }
}
const hoverBounce = {
    hover: {
        transition: { type: "spring", stiffness: 200, duration: 1, scale: [1, 0.9, 1.1, 1] }
    }
}

export { logoConfig, pageTransition, glideDown, fadeinPopout, parentContainer, glideUp, tickle, childItems, hoverBounce }