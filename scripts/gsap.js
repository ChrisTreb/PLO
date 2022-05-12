var tl = gsap.timeline()
    .from("h1", { yPercent: -150, duration: 1, delay: 1.5, ease: Bounce.easeOut })
    .staggerFrom(".activities li", 1, { scale: 0, ease: Bounce.easeOut }, 0.2)