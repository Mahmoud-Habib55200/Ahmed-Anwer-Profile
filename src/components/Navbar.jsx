import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = ["intel", "stack", "operations", "services", "communication"];

export default function Navbar({ addMagneticRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!isOpen) return;
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-cyan-500/10" ref={wrapperRef}>
      <nav className="flex justify-between items-center px-6 md:px-8 lg:px-12 py-4 max-w-full mx-auto">
        <div className="text-2xl font-black tracking-tighter text-cyan-400 italic font-headline cursor-pointer hover:scale-105 transition-transform">
          KINETIC COMMAND
        </div>

        <div className="hidden lg:flex gap-8">
          {NAV_ITEMS.map((id) => (
            <a
              key={id}
              className="nav-link font-headline uppercase tracking-[0.05em] text-sm font-bold text-slate-400 hover:text-cyan-200 transition-all duration-300"
              href={`#${id}`}
            >
              {id === "operations" ? "OPERATION" : id.toUpperCase()}
            </a>
          ))}
        </div>

        <button
          className="magnetic hidden lg:block bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold uppercase py-2 px-6 rounded-lg text-sm tracking-widest hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all overflow-hidden relative group"
          ref={addMagneticRef}
        >
          <span className="relative z-10 group-hover:translate-y-[-120%] block transition-transform duration-300">ESTABLISH_LINK</span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300">
            ENGAGE_NOW
          </span>
        </button>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-primary-container/30 rounded-lg text-primary-container hover:bg-primary-container/10 transition-all"
        >
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`mobile-nav-panel lg:hidden border-t border-cyan-500/10 ${
          isOpen ? "mobile-nav-panel-open" : "mobile-nav-panel-closed"
        }`}
      >
        <div className="mobile-nav-content px-6 md:px-8 py-5 flex flex-col gap-4 bg-slate-950/95">
          {NAV_ITEMS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="nav-link font-headline uppercase tracking-[0.05em] text-sm font-bold text-slate-400 hover:text-cyan-200 transition-all duration-300 py-2"
            >
              {id === "operations" ? "OPERATION" : id.toUpperCase()}
            </a>
          ))}

          <button
            className="magnetic bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold uppercase py-2 px-6 rounded-lg text-sm tracking-widest hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all overflow-hidden relative group mt-2"
            ref={addMagneticRef}
            onClick={closeMenu}
          >
            <span className="relative z-10 group-hover:translate-y-[-120%] block transition-transform duration-300">
              ESTABLISH_LINK
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300">
              ENGAGE_NOW
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
