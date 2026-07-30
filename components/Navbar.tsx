type NavbarProps = {
    email: string;
};

export default function Navbar({ email }: NavbarProps) {
    return (
        <nav
            className="z-10 mx-auto mt-5 flex w-fit items-center gap-6 rounded-full border border-white/10 bg-white/4 px-4 py-4 backdrop-blur-md sm:gap-8 sm:px-8"
            aria-label="Primary navigation"
        >
            <a
                className="font-mono text-base font-bold tracking-[-0.08em] text-white"
                href="#top"
                aria-label="Home"
            >
                FS<span className="text-cyan-200">.</span>
            </a>
            <div className="hidden items-center gap-5 text-xs text-zinc-400 sm:flex">
                <a className="transition-colors hover:text-white" href="#work">
                    Work
                </a>
                <a className="transition-colors hover:text-white" href="#about">
                    About
                </a>
                <a
                    className="transition-colors hover:text-white"
                    href="#experience"
                >
                    Experience
                </a>
                <a
                    className="transition-colors hover:text-white"
                    href={`mailto:${email}`}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}
