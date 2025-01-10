
export const SA_mainContainer = (delay?: number) => {
    return {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    }
};
export const SA_childItems = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1, scale: 1, transition: {
            type: "spring",
            damping: 5,
            mass: 0.75,
            stiffness: 100,
        }
    }
};