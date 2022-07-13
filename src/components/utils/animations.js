export const pageTransition = {
    hidden: {
        opacity: 0
        ,
    },
    show: {
        opacity: 1,
        transition: { duration: .3, delay: .3, staggerChildren: .3, when: 'beforeChildren' }
    },
    exit: {
        opacity: 0,
        transition: { duration: .3 }
    }
}

export const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, delay: .4 } }
}

export const moveTop = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: .5, ease: 'easeOut' } }
}

export const fadeInRight = {
    hidden: { opacity: 0, x: -300 },
    show: { opacity: 1, x: 0, transition: { duration: .75, ease: 'easeOut' } }
}

export const moveToLeft = {
    hidden: { x: '200%' },
    show: { x: '0', transition: { duration: 1, ease: 'easeOut' } }
}

export const imgTransition = {
    hidden: { x: '0%' },
    show: { x: '100%', transition: { duration: 1.5, ease: 'easeIn' } }
}
