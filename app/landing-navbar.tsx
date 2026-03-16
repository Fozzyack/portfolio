export function LandingNavbar() {
    return (
        <nav className="fixed z-20 flex w-full items-center justify-between px-6 py-6 text-[0.72rem] uppercase tracking-[0.22em] md:px-10 md:text-[0.78rem]">
            <a
                href="#projects"
                className="animate-fade-in text-[#232720]/85 transition-opacity hover:opacity-60"
            >
                Projects
            </a>
            <a
                href="#"
                className="animate-fade-in bg-[linear-gradient(90deg,#232720_0%,#232720_50%,#e7e1d3_50%,#e7e1d3_100%)] bg-clip-text text-transparent transition-opacity hover:opacity-75"
                style={{ animationDelay: "120ms" }}
            >
                Frasier Sundra
            </a>
            <a
                href="#contact"
                className="animate-fade-in text-[#e7e1d3]/90 transition-opacity hover:opacity-60"
                style={{ animationDelay: "220ms" }}
            >
                Contact
            </a>
        </nav>
    );
}
