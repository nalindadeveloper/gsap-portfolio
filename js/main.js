document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.1
    });

    gsap.registerPlugin(ScrollTrigger);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Hero section
    let heroTimeline = gsap.timeline();

    heroTimeline
    .from(".hero-section .solid-title", {
        duration: 1,
        opacity: 0,
        y: 100
    })
    .from(".hero-section .gradient-title", {
        duration: 1,
        opacity: 0,
        y: 100
    })
    .from(".hero-section .paragraph", {
        duration: 1,
        opacity: 0,
        x: -100
    })
    ;

    // Stat section
    gsap.utils.toArray(".stat-section .single-section").forEach((item, index) => {
        const number = item.querySelector(".number span");

        if (!number) return;

        const target = parseInt(number.textContent, 10);

        const counter = {
            value: 0
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".stat-section",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        tl.to(counter, {
            value: target,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
                number.textContent = Math.floor(counter.value);
            }
        }, "-=0.4");
    });

    // Text section
    const textDescription = document.querySelector(".text-section .description");

    const textDescriptionSplit = SplitText.create(textDescription, {
        type: "lines",
        mask: "lines"
    });

    gsap.from(textDescriptionSplit.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",

        scrollTrigger: {
            trigger: ".text-section",
            start: "top 50%",
            once: true
        }
    });

    // Outline secion
    gsap.fromTo('.outline-section .image',
        {
            x: '-100%'
        },
        {
            x: '100%',
            scrollTrigger: {
                trigger: ".outline-section",
                start: "top 60%",
                end: "bottom 40%",
                scrub: 1
            }
        }
    );

    // Why choose section
    const whySection = document.querySelector(".why-choose-section");
    const left = whySection.querySelector(".left-wrapper");

    ScrollTrigger.create({
        trigger: whySection,
        start: "top top",
        end: "bottom bottom",
        pin: left,
        // pinSpacing: true,
    });

    const paths = document.querySelectorAll(".tech-line .draw-path");

paths.forEach((path) => {
    const length = path.getTotalLength();

    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
    });
});

gsap.to(paths, {
    strokeDashoffset: 0,
    ease: "none",
    stagger: 0.02,
    scrollTrigger: {
        trigger: ".why-choose-section",
        start: "top 20%",
        end: "bottom 80%",
        scrub: 1,
        // pin: true
    }
});

    // Image section
    gsap.from('.image-section img', {
        y: 200,
        scale: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".image-section",
            start: "top 40%",
            toggleActions: "play none none reverse"
        }
    });

    // Case studies section
    const caseSection = document.querySelector(".case-studies-section");
    const cardsWrapper = document.querySelector(".case-studies-section .cards-wrapper");

    if (caseSection && cardsWrapper) {
        const getScrollAmount = () => {
            return Math.max(0, cardsWrapper.scrollWidth - caseSection.clientWidth);
        };

        gsap.to(cardsWrapper, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: caseSection,
                start: "top top",
                end: () => `+=${getScrollAmount()}`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // markers: true
            }
        });
    }

    // Process section
    const processTitle = document.querySelector(".process-section .title");

    const processTitleSplit = SplitText.create(processTitle, {
        type: "lines",
        mask: "lines"
    });

    gsap.from(processTitleSplit.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",

        scrollTrigger: {
            trigger: ".process-section",
            start: "top 50%",
            once: true
        }
    });

    const processSection = document.querySelector(".process-section .list-wrapper");
    const processItems = gsap.utils.toArray(".process-section .single-list");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: processSection,
            start: "top 10%",
            // start: () => `+=${getScrollAmount()}`,
            end: "+=8000",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true
        }
    });

    tl.from(processItems, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "power3.out"
    });

        // Opacity description
    document.querySelectorAll(".opacity-desc").forEach((desc) => {
        const text = desc.textContent;

        desc.innerHTML = [...text]
            .map((char) => {
                if (char === " ") {
                    return " ";
                }

                return `<span class="char">${char}</span>`;
            })
            .join("");

        gsap.fromTo(
            desc.querySelectorAll(".char"),
            {
                opacity: 0.3
            },
            {
                opacity: 1,
                stagger: 0.03,
                ease: "none",

                scrollTrigger: {
                    trigger: desc,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true
                }
            }
        );
    });
});
