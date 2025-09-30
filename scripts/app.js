document.addEventListener("DOMContentLoaded", () => {
    // Animación avanzada del logo y enlaces
    gsap.to(".nav-logo", {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)"
    });
    gsap.to(".nav-links li", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.5
    });

    // Menú hamburguesa responsivo
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        gsap.fromTo(navLinks, {x: 100}, {x: 0, duration: 0.5, ease: "power2.out"});
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Animaciones de scroll para elementos con la clase anim-item
    gsap.utils.toArray('.anim-item').forEach(item => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleClass: {targets: item, className: "visible"},
                once: true
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Animación avanzada de la flor en el héroe
    if (document.querySelector(".hero-flower")) {
        gsap.fromTo(".hero-flower", {scale: 0, opacity: 0}, {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.7)"
        });
        gsap.to(".petal", {
            rotation: 360,
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            duration: 2,
            ease: "power1.inOut"
        });
    }
});