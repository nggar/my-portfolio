export const pageTransition = {
    hidden: {
        opacity: 0, y: 300
    },
    show: {
        opacity: 1, y: 0,
        transition: { duration: .4, delay: .3, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0, y: 300,
        transition: { duration: .4, ease: 'easeInOut' }
    }
}

export const skewAnimation = {
    hidden: {
        skewX: '-30deg', opacity: 0
    },
    show: {
        skewX: '0deg', opacity: 1,
        transition: { duration: .3, ease: 'easeOut' }
    }
}