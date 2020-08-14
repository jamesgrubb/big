
function init() {
    const gsap = window.gsap
    gsap.registerPlugin('ScrollTrigger')

    const tl = gsap.timeline()
    tl.from('.card', {
        rotateY: "-180deg",
        ease: "power1.inOut",
        stagger: {
            each: 0.1,
            from: "start"

        },
        duration: 1,
        scrollTrigger: {
            trigger: '.container',
            scrub: true,
            start: "20% 20%",
            end: "200% 80%",
            pin: true
        }
    })

}


document.addEventListener('DOMContentLoaded', init)

