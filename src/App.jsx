import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import { IT } from "./img";

const stats = [
  { value: "15", label: "Years Experience", color: "text-primary" },
  { value: "200", label: "Cloud Migrations", color: "text-secondary" },
  { value: "500", label: "K+ Managed Nodes", color: "text-tertiary-container" },
  { value: "99.9", label: "Uptime SLA (%)", color: "text-primary-container" },
];

const stackItems = [
  ["cloud", "AWS/AZURE", "text-primary"],
  ["terminal", "LINUX_OP", "text-primary"],
  ["security", "CYBERSEC", "text-primary"],
  ["dns", "KUBERNETES", "text-secondary"],
  ["database", "NOSQL_HQ", "text-secondary"],
  ["lan", "TOPOLOGY", "text-secondary"],
  ["hub", "CI_CD", "text-secondary"],
  ["monitoring", "DATADOG", "text-tertiary-container"],
  ["code", "PYTHON_SCR", "text-tertiary-container"],
  ["settings_input_component", "TERRAFORM", "text-tertiary-container"],
];

function addRef(refList, element) {
  if (element && !refList.current.includes(element)) {
    refList.current.push(element);
  }
}

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const preloaderRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const typewriterRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const serverRackRef = useRef(null);
  const timelineRef = useRef(null);
  const timelinePathRef = useRef(null);

  const heroWordRefs = useRef([]);
  const entranceCardRefs = useRef([]);
  const statRefs = useRef([]);
  const magneticRefs = useRef([]);
  const tiltRefs = useRef([]);
  const hexRefs = useRef([]);
  const ambientOrbRefs = useRef([]);

  const title1CharsRef = useRef([]);
  const title2CharsRef = useRef([]);
  const title3CharsRef = useRef([]);
  const title4CharsRef = useRef([]);
  const title5CharsRef = useRef([]);

  useEffect(() => {
    document.body.className =
      "font-body selection:bg-primary-container selection:text-on-primary-container opacity-0";
  }, []);

  useEffect(() => {
    let rafId = 0;
    const updateLoader = () => {
      setProgress((prev) => {
        const next = Math.min(100, prev + Math.random() * 5);
        if (next < 100) {
          rafId = requestAnimationFrame(updateLoader);
        } else {
          setTimeout(() => {
            window.gsap.to(preloaderRef.current, {
              duration: 1,
              clipPath: "circle(0% at 50% 50%)",
              ease: "power4.inOut",
              onComplete: () => {
                setLoaded(true);
                document.body.classList.remove("opacity-0");
              },
            });
          }, 500);
        }
        return next;
      });
    };

    rafId = requestAnimationFrame(updateLoader);
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    window.gsap.set(heroWordRefs.current, { y: 100, opacity: 0 });
    window.gsap.set(heroButtonsRef.current, { opacity: 0, y: 20 });
    window.gsap.set(serverRackRef.current, { scale: 0.8, rotateY: -30, opacity: 0 });

    const tl = window.gsap.timeline();
    tl.to(heroWordRefs.current, { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power4.out" })
      .to(
        serverRackRef.current,
        { scale: 1, rotateY: -15, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
        "-=0.5",
      )
      .to(heroButtonsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.8");

    const typed = new window.Typed(typewriterRef.current, {
      strings: [
        "ELITE IT SYSTEMS ARCHITECT.",
        "STRATEGIC MANAGER.",
        "CLOUD ORCHESTRATION EXPERT.",
        "GLOBAL COMMAND OPERATIONS.",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      tl.kill();
      typed.destroy();
    };
  }, [loaded]);

  useEffect(() => {
    const onMouseMove = (event) => {
      window.gsap.to(dotRef.current, { duration: 0.1, x: event.clientX, y: event.clientY });
      window.gsap.to(ringRef.current, { duration: 0.3, x: event.clientX - 18, y: event.clientY - 18 });
    };
    const onMouseDown = () => window.gsap.to(ringRef.current, { scale: 1.5, duration: 0.2 });
    const onMouseUp = () => window.gsap.to(ringRef.current, { scale: 1, duration: 0.2 });
    const onOver = (event) => {
      if (event.target.closest("button, a, .hex, .glass")) {
        window.gsap.to(ringRef.current, { scale: 2, backgroundColor: "rgba(0, 212, 255, 0.1)", duration: 0.3 });
        window.gsap.to(dotRef.current, { scale: 0.5, duration: 0.3 });
      }
    };
    const onOut = (event) => {
      if (event.target.closest("button, a, .hex, .glass")) {
        window.gsap.to(ringRef.current, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
        window.gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  useEffect(() => {
    const cleanups = magneticRefs.current.map((element) => {
      const onMove = (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        window.gsap.to(element, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: "power2.out" });
      };
      const onLeave = () => {
        window.gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
      };
      element.addEventListener("mousemove", onMove);
      element.addEventListener("mouseleave", onLeave);
      return () => {
        element.removeEventListener("mousemove", onMove);
        element.removeEventListener("mouseleave", onLeave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    window.gsap.registerPlugin(window.ScrollTrigger);

    const titleAnimations = [title1CharsRef, title2CharsRef, title3CharsRef, title4CharsRef, title5CharsRef].map(
      (titleRef) =>
        window.gsap.from(titleRef.current, {
          scrollTrigger: { trigger: titleRef.current[0], start: "top 80%" },
          opacity: 0,
          rotateY: 90,
          y: 20,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
        }),
    );

    const cardAnimations = entranceCardRefs.current.map((card, index) =>
      window.gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 80,
        opacity: 0,
        duration: 1,
        delay: (index % 3) * 0.1,
        ease: "power4.out",
      }),
    );

    const statAnimations = statRefs.current.map((statEl) => {
      const target = Number.parseFloat(statEl.dataset.count);
      return window.gsap.to(statEl, {
        scrollTrigger: { trigger: statEl, start: "top 85%" },
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power4.out",
        onUpdate: () => {
          if (target % 1 !== 0) {
            statEl.innerText = Number.parseFloat(statEl.innerText).toFixed(1);
          }
        },
      });
    });

    const updatePath = () => {
      const height = timelineRef.current.offsetHeight;
      timelinePathRef.current.setAttribute("d", `M 5 0 L 5 ${height}`);
      const length = timelinePathRef.current.getTotalLength();
      timelinePathRef.current.style.strokeDasharray = length;
      timelinePathRef.current.style.strokeDashoffset = length;
      window.gsap.to(timelinePathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: { trigger: timelineRef.current, start: "top center", end: "bottom center", scrub: 1 },
      });
    };
    updatePath();
    window.addEventListener("resize", updatePath);

    return () => {
      window.removeEventListener("resize", updatePath);
      [...titleAnimations, ...cardAnimations, ...statAnimations].forEach((animation) => animation.kill());
      window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00d4ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 150, color: "#00d4ff", opacity: 0.2, width: 1 },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } },
      },
      retina_detect: true,
    });

    const orbAnimation = window.gsap.to(ambientOrbRefs.current, {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: "random(10, 20)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    return () => orbAnimation.kill();
  }, []);

  useEffect(() => {
    const cleanups = hexRefs.current.map((hex) => {
      const onEnter = () => {
        const rect = hex.getBoundingClientRect();
        for (let index = 0; index < 8; index += 1) {
          const particle = document.createElement("div");
          particle.style.position = "fixed";
          particle.style.width = "4px";
          particle.style.height = "4px";
          particle.style.background = "#00d4ff";
          particle.style.borderRadius = "50%";
          particle.style.left = `${rect.left + rect.width / 2}px`;
          particle.style.top = `${rect.top + rect.height / 2}px`;
          particle.style.pointerEvents = "none";
          particle.style.zIndex = "99";
          particle.style.boxShadow = "0 0 10px #00d4ff";
          document.body.appendChild(particle);
          const angle = Math.random() * Math.PI * 2;
          const velocity = 50 + Math.random() * 50;
          window.gsap.to(particle, {
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity,
            opacity: 0,
            duration: 0.6,
            onComplete: () => particle.remove(),
          });
        }
      };
      hex.addEventListener("mouseenter", onEnter);
      return () => hex.removeEventListener("mouseenter", onEnter);
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    window.VanillaTilt.init(tiltRefs.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }, []);

  return (
    <>
      <div id="preloader" ref={preloaderRef} style={{ display: loaded ? "none" : "flex" }}>
        <div className="loader-logo">A.A</div>
        <div className="loader-bar-container">
          <div id="loader-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-4 font-mono text-[10px] text-primary/60 tracking-widest uppercase" id="loader-percent">
          INITIALIZING_CORE_{Math.round(progress)}%
        </div>
      </div>

      <div className="ambient-orb bg-primary-container" ref={(e) => addRef(ambientOrbRefs, e)} style={{ top: "10%", left: "-5%" }} />
      <div
        className="ambient-orb bg-secondary-container"
        ref={(e) => addRef(ambientOrbRefs, e)}
        style={{ bottom: "10%", right: "-5%" }}
      />
      <div className="ambient-orb bg-tertiary-container" ref={(e) => addRef(ambientOrbRefs, e)} style={{ top: "50%", right: "20%" }} />
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-40" id="particles-js" />

      <Navbar addMagneticRef={(element) => addRef(magneticRefs, element)} />

      <main>
        <section className="min-h-screen flex items-center justify-center px-12 relative overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10 hero-content">
              <span className="font-mono text-primary text-xs tracking-[0.5em] uppercase mb-4 block animate-pulse">
                // PROTOCOL_IDENTITY_VERIFIED
              </span>
              <h1 className="font-headline text-7xl md:text-9xl font-extrabold text-on-surface leading-none mb-6">
                <span className="hero-word block" ref={(e) => addRef(heroWordRefs, e)}>
                  AHMED
                </span>
                <span className="hero-word text-primary-container block" ref={(e) => addRef(heroWordRefs, e)}>
                  ANWAR
                </span>
              </h1>
              <div className="font-body text-xl text-on-surface-variant max-w-lg mb-8 leading-relaxed">
                <span id="hero-typewriter" ref={typewriterRef} />
              </div>
              <div className="flex gap-4 hero-buttons" ref={heroButtonsRef}>
                <button
                  className="magnetic bg-primary-container text-on-primary px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all"
                  ref={(e) => addRef(magneticRefs, e)}
                >
                  INITIALIZE_STACK
                </button>
                <button
                  className="magnetic border border-primary-container/20 text-primary-container px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-container/10 transition-colors"
                  ref={(e) => addRef(magneticRefs, e)}
                >
                  DECRYPT_PROFILE
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="server-rack-container" data-tilt data-tilt-glare data-tilt-max="15" data-tilt-max-glare="0.5">
                <div
                  className="server-rack   h-[600px] mx-auto glass rounded-lg p-6 shadow-2xl"
                  ref={(e) => {
                    serverRackRef.current = e;
                    addRef(tiltRefs, e?.parentElement || null);
                  }}
                >
                     
                     <img src={IT} alt="" />
                   
                   
                  <div className="space-y-1">
                    <div className="h-4 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 bg-slate-800 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="h-4 bg-slate-800 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <div className="h-4 bg-slate-800 rounded animate-pulse" style={{ animationDelay: "0.6s" }} />
                    <div className="h-4 bg-slate-800 rounded animate-pulse" style={{ animationDelay: "0.8s" }} />
                    <div className="h-12 bg-primary/10 border border-primary/20 rounded mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-lowest" id="intel">
          <div className="container mx-auto px-12">
            <SectionTitle
              text="MISSION_OBJECTIVE"
              className="font-headline text-5xl font-bold mb-16 text-center uppercase tracking-tighter"
              titleRef={title1CharsRef}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="glass p-10 rounded-lg border-l-4 border-l-primary-container entrance-card" ref={(e) => addRef(entranceCardRefs, e)}>
                <p className="font-body text-on-surface-variant leading-loose mb-6">
                  As a high-performance <span className="text-primary font-bold">IT Executive</span>, I bridge the gap between
                  technical complexity and business growth. I don't just manage systems; I architect digital fortresses. With 15+
                  years of operational excellence, I transform fragmented legacy infrastructures into streamlined, elastic command
                  centers.
                </p>
                <p className="font-body text-on-surface-variant leading-loose">
                  My approach is data-driven, risk-mitigated, and relentlessly future-focused. I lead global teams through the
                  pressures of digital transformation with technical precision and tactical leadership.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass p-8 flex flex-col justify-center items-center text-center entrance-card"
                    ref={(e) => {
                      addRef(entranceCardRefs, e);
                      addRef(tiltRefs, e);
                    }}
                    data-tilt
                  >
                    <span className={`text-4xl font-headline font-black mb-2 stat-counter ${stat.color}`} ref={(e) => addRef(statRefs, e)} data-count={stat.value}>
                      0
                    </span>
                    <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface relative overflow-hidden" id="stack">
          <div className="container mx-auto px-12 text-center mb-16">
            <SectionTitle text="CORE_STACK_COMPONENTS" className="font-headline text-5xl font-extrabold mb-4 uppercase" titleRef={title2CharsRef} />
            <div className="h-1 w-24 bg-primary mx-auto scroll-line-grow" />
          </div>
          <div className="hex-grid justify-center flex flex-wrap max-w-5xl mx-auto">
            {stackItems.map(([icon, text, color]) => (
              <div
                key={text}
                className="hex entrance-card"
                ref={(e) => {
                  addRef(entranceCardRefs, e);
                  addRef(hexRefs, e);
                }}
              >
                <span className={`material-symbols-outlined mb-2 ${color}`}>{icon}</span>
                <span className="font-label text-[10px] uppercase">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 bg-surface-container-lowest relative" id="operations">
          <div className="container mx-auto px-12">
            <SectionTitle
              text="OPERATIONAL_HISTORY"
              className="font-headline text-5xl font-bold mb-24 text-center uppercase tracking-[0.2em]"
              titleRef={title3CharsRef}
            />
            <div className="relative max-w-4xl mx-auto pl-12 space-y-24" ref={timelineRef}>
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-800">
                <svg className="absolute top-0 left-[-4px] w-[10px] h-full overflow-visible">
                  <path d="" fill="none" id="timeline-path" stroke="#00d4ff" strokeLinecap="round" strokeWidth="4" ref={timelinePathRef} />
                </svg>
              </div>
              {[
                ["2020 - PRESENT // GLOBAL_COMMAND", "CHIEF IT DIRECTOR @ NEXUS CORP", "bg-primary-container shadow-[0_0_15px_#00d4ff]", "text-primary"],
                ["2016 - 2020 // REGIONAL_OPS", "SENIOR SYSTEMS MANAGER @ VORTEX TECH", "bg-secondary shadow-[0_0_15px_#d1bcff]", "text-secondary"],
                ["2012 - 2016 // INFRA_ENG", "INFRASTRUCTURE ENGINEER @ BLUE_CORE", "bg-tertiary-container shadow-[0_0_15px_#feb528]", "text-tertiary-container"],
              ].map(([period, role, dotColor, textColor]) => (
                <div className="relative timeline-item" key={role}>
                  <div className={`timeline-dot absolute -left-[54px] top-0 w-4 h-4 rounded-full z-10 ${dotColor}`} />
                  <div
                    className="glass p-8 rounded-lg entrance-card"
                    ref={(e) => {
                      addRef(entranceCardRefs, e);
                      addRef(tiltRefs, e);
                    }}
                    data-tilt
                  >
                    <span className={`font-mono text-xs mb-2 block ${textColor}`}>{period}</span>
                    <h3 className="font-headline text-2xl font-bold mb-4">{role}</h3>
                    <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                      {role.includes("NEXUS")
                        ? "Spearheaded a $15M digital overhaul of legacy data centers. Migrated 400+ enterprise applications to a hybrid-cloud architecture, resulting in a 35% reduction in operational overhead and achieving sub-millisecond latency for global branches."
                        : role.includes("VORTEX")
                          ? "Managed a team of 40+ engineers across 3 time zones. Implemented zero-trust security protocols and automated 80% of routine maintenance tasks using custom Python frameworks."
                          : "Built the foundation for high-availability database clusters. Redesigned the core network backbone to support 500% traffic growth during peak quarterly cycles."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-lowest overflow-hidden" id="services">
          <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <SectionTitle text="DEPLOYMENT_SERVICES" className="font-headline text-5xl font-extrabold mb-4" titleRef={title4CharsRef} />
                <p className="text-on-surface-variant font-body">
                  Tactical solutions engineered for enterprise resilience. We don't just solve problems; we eliminate vulnerabilities
                  at the source.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-primary/20" />
                <div className="w-12 h-1 bg-primary/50" />
                <div className="w-24 h-1 bg-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                ["cloud_done", "CLOUD ARCHITECTURE", "01_SCALABILITY", "text-primary", "bg-primary/10", "group hover:bg-primary/5"],
                ["security", "CYBER DEFENSE", "02_RESILIENCE", "text-secondary", "bg-secondary/10", "group hover:bg-secondary/5"],
                ["groups", "IT STEERCO", "03_STRATEGY", "text-tertiary-container", "bg-tertiary-container/10", "group hover:bg-tertiary-container/5"],
              ].map(([icon, title, code, textColor, iconBg, cardStyle]) => (
                <div
                  key={title}
                  className={`glass p-10 transition-colors entrance-card ${cardStyle}`}
                  ref={(e) => {
                    addRef(entranceCardRefs, e);
                    addRef(tiltRefs, e);
                  }}
                  data-tilt
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${iconBg}`}>
                    <span className={`material-symbols-outlined ${textColor}`}>{icon}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tighter">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    {title.includes("CLOUD")
                      ? "Designing elastic, fault-tolerant infrastructure that grows with your enterprise demand."
                      : title.includes("CYBER")
                        ? "Implementing state-of-the-art security postures and incident response frameworks."
                        : "Fractional CTO services and strategic leadership for high-stakes technology pivots."}
                  </p>
                  <span className={`text-[10px] font-mono tracking-[0.2em] ${textColor}/40`}>{code}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface" id="communication">
          <div className="container mx-auto px-12">
            <div
              className="max-w-5xl mx-auto glass p-12 rounded-lg border border-primary/20 relative entrance-card"
              data-tilt
              data-tilt-max="5"
              ref={(e) => {
                addRef(entranceCardRefs, e);
                addRef(tiltRefs, e);
              }}
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20">NODE_COMM: 10.0.0.1</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <SectionTitle text="SECURE_LINK" className="font-headline text-5xl font-bold mb-8 uppercase" titleRef={title5CharsRef} />
                  <p className="text-on-surface-variant mb-12">
                    Establish a direct channel for tactical inquiries. All data transmitted is encrypted using enterprise-grade
                    protocols.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                      <span className="material-symbols-outlined text-primary">mail</span>
                      <span className="font-label text-sm">ahmed.anwar@kinetic-command.net</span>
                    </div>
                    <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      <span className="font-label text-sm">GLOBAL COMMAND (DXB / SF / LON)</span>
                    </div>
                  </div>
                </div>
                <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                  <div className="relative group">
                    <label className="text-[10px] font-mono text-primary uppercase mb-2 block">// SENDER_IDENTITY</label>
                    <input
                      className="w-full bg-slate-900/50 border-0 border-l-2 border-primary/20 focus:border-primary focus:ring-0 text-on-surface text-sm p-4 transition-all"
                      placeholder="NAME/CALLSIGN"
                      type="text"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-mono text-primary uppercase mb-2 block">// COMMS_ENDPOINT</label>
                    <input
                      className="w-full bg-slate-900/50 border-0 border-l-2 border-primary/20 focus:border-primary focus:ring-0 text-on-surface text-sm p-4 transition-all"
                      placeholder="EMAIL_ADDR"
                      type="email"
                    />
                  </div>
                  <button
                    className="magnetic w-full bg-primary-container text-on-primary font-headline font-bold uppercase tracking-[0.3em] py-4 hover:shadow-[0_0_30px_#00d4ff] transition-all overflow-hidden relative group"
                    ref={(e) => addRef(magneticRefs, e)}
                  >
                    <span className="relative z-10 group-hover:translate-y-[-120%] block transition-transform duration-300">
                      ENGAGE_CONNECTION
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300">
                      TRANSMIT_NOW
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 border-t border-cyan-900/30">
        <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-cyan-500/50 font-headline uppercase">KINETIC COMMAND // ANWAR</div>
          <div className="flex gap-8">
            <a className="magnetic text-primary/40 hover:text-primary transition-colors text-xs font-mono" href="#" ref={(e) => addRef(magneticRefs, e)}>
              <span className="material-symbols-outlined align-middle mr-1">hub</span>LINKEDIN
            </a>
            <a className="magnetic text-primary/40 hover:text-primary transition-colors text-xs font-mono" href="#" ref={(e) => addRef(magneticRefs, e)}>
              <span className="material-symbols-outlined align-middle mr-1">code</span>GITHUB
            </a>
          </div>
          <div className="font-mono text-[10px] text-slate-600 tracking-widest uppercase">© 2024 KINETIC COMMAND // TOP_SECRET</div>
        </div>
      </footer>
    </>
  );
}
