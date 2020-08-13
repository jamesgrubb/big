
function init() {
    const gsap = window.gsap
    const tl = gsap.timeline()
    tl.to('.card', {
        rotateY: "180deg",
        stagger: {
            each: 0.1
        },
        duration: 1
    })

}


document.addEventListener('DOMContentLoaded', init)

