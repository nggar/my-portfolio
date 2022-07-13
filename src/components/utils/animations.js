export const pageTransition = {
    hidden: {
        opacity: 0, y: 300
    },
    show: {
        opacity: 1, y: 0,
        transition: { duration: .5, delay: .25 }
    },
    exit: {
        opacity: 0,
        transition: { duration: .5 }
    }
}
