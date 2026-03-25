import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        const heading = section.querySelector(".contact-heading");
        const subItems = section.querySelectorAll(".contact-sub");
        const cta = section.querySelector(".contact-cta");

        if (heading) {
            gsap.from(heading, {
                scrollTrigger: { trigger: heading, start: "top 85%" },
                opacity: 0,
                y: 24,
                duration: 1,
                ease: "expo.out",
                clearProps: "all",
            });
        }

        subItems.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 88%" },
                opacity: 0,
                y: 20,
                duration: 0.7,
                ease: "power2.out",
                clearProps: "all",
            });
        });

        if (cta) {
            gsap.from(cta, {
                scrollTrigger: { trigger: cta, start: "top 90%" },
                opacity: 0,
                y: 20,
                duration: 0.7,
                ease: "power2.out",
                delay: 0.2,
                onComplete: () => gsap.set(cta, { clearProps: "all" }),
            });
        }
    });

    return (
        <section id="contact" ref={sectionRef}>
            <div className="content">
                <div>
                    <h3 className="contact-sub">Ready to see it live?</h3>
                    <h2 className="contact-heading">
                        See Rapid Author in Action
                    </h2>
                </div>

                <div>
                    <h3 className="contact-sub">Live Demo</h3>
                    <p className="contact-sub">
                        Explore an interactive illustrated parts catalog, work
                        instructions, and 3D training content — all authored
                        with Rapid Author.
                    </p>
                </div>

                <a
                    href="https://demo.cortona3d.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-cta inline-block border border-yellow text-yellow font-modern-negra text-2xl px-10 py-4 rounded-full hover:bg-yellow hover:text-black transition-colors duration-300"
                >
                    Open Demo
                </a>
            </div>
        </section>
    );
};

export default Contact;
