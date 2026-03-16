export function LandingNavbar() {
    return (
        <nav className="fixed z-30 grid w-full grid-cols-3 items-center px-6 py-5 text-[0.72rem] uppercase tracking-[0.22em] md:px-10 md:text-[0.78rem]">
            <div className="absolute inset-x-4 top-3 -z-10 h-11 rounded-full border border-[#e7e1d3]/25 bg-[#1b1e1a]/58 backdrop-blur-sm md:inset-x-8" />
            <a
                href="#projects"
                className="animate-fade-in justify-self-start pl-4 text-[#e7e1d3]/88 transition-opacity hover:opacity-65"
            >
                Projects
            </a>
            <a
                href="#"
                className="animate-fade-in justify-self-center bg-[linear-gradient(90deg,#c8b28b_0%,#c8b28b_50%,#e7e1d3_50%,#e7e1d3_100%)] bg-clip-text text-transparent transition-opacity hover:opacity-75"
                style={{ animationDelay: "120ms" }}
            >
                Frasier Sundra
            </a>
            <span
                className="animate-fade-in justify-self-end mr-1 rounded-full border border-[#e7e1d3]/35 bg-[#e7e1d3]/10 px-3 py-1 text-[0.6rem] tracking-[0.18em] text-[#e7e1d3]/92"
                style={{ animationDelay: "220ms" }}
            >
                Available 2026
            </span>
        </nav>
    );
}
